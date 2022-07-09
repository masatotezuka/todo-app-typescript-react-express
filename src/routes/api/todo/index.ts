import * as express from "express";
import { AppDataSource } from "../../../../ormconfig";
import { Todo } from "../../../entity/Todo";
import { User } from "../../../entity/User";

const router = express.Router();
const todoRepository = AppDataSource.getRepository(Todo);

router.get("/:userId", async (req, res, next) => {
  try {
    const userId = Number(req.params.userId);

    const todos = await todoRepository.find({
      select: {
        id: true,
        title: true,
        description: true,
        deadline: true,
        completedAt: true,
        archivedAt: true,
      },
      where: { user: { id: userId } },
    });
    res.status(200).json(todos);
  } catch (error) {
    if (error instanceof Error) {
      res.json({ message: error.message });
    }
  }
});

router.post("/", async (req, res, next) => {
  try {
    const todos = new Todo();
    const user = new User();
    const userId = Number(req.body.userId);

    user.id = userId;
    todos.title = req.body.title;
    todos.description = req.body.description;
    todos.deadline = req.body.deadline;
    todos.completedAt = null;
    todos.user = user;
    await AppDataSource.manager.save(todos);

    return res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/", async (req, res, next) => {
  try {
    todoRepository.delete(req.body.id);
    return res.status(200).json(req.body.id);
  } catch (error) {
    console.log(error);
  }
});

router.put("/changeStatus", async (req, res, next) => {
  try {
    const { data } = req.body;

    const todo = new Todo();
    todo.id = data.id;
    if (data.completedAt) {
      todo.completedAt = null;
    } else {
      todo.completedAt = new Date();
    }
    await todoRepository.save(todo);

    const response = await todoRepository.find({
      select: {
        id: true,
        completedAt: true,
      },
      where: {
        id: data.id,
      },
    });

    return res.status(200).json(response[0]);
  } catch (error) {
    console.log(error);
  }
});

router.put("/updateTodo", async (req, res, next) => {
  try {
    await todoRepository.update(req.body.data.id, {
      title: req.body.data.title,
      description: req.body.data.description,
      deadline: req.body.data.deadline,
    });
    const response = await todoRepository.find({
      select: {
        id: true,
        title: true,
        description: true,
        deadline: true,
        completedAt: true,
      },
      where: {
        id: req.body.data.id,
      },
    });

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
});

router.put("/toggleArchiveTodo", async (req, res, next) => {
  try {
    const { data } = req.body;
    const todo = new Todo();

    if (data.archivedAt) {
      todo.id = data.id;
      todo.archivedAt = null;
      await todoRepository.save(todo);
    } else {
      todo.id = data.id;
      todo.archivedAt = new Date();
      await todoRepository.save(todo);
    }

    const response = await todoRepository.find({
      select: {
        id: true,
        archivedAt: true,
      },
      where: {
        id: req.body.data.id,
      },
    });

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
});

export default router;
