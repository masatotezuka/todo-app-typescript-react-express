import * as express from "express";
import { RequestHandler } from "express";
import { AppDataSource } from "../../../../ormconfig";
import { Todo } from "../../../entity/Todo";
import { User } from "../../../entity/User";

const router = express.Router();
const todoRepository = AppDataSource.getRepository(Todo);

router.get("/", async (req, res, next) => {
  try {
    const todos = await todoRepository.find({
      select: {
        id: true,
        title: true,
        description: true,
        deadline: true,
        status: true,
      },
    });
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const todos = new Todo();
    todos.title = req.body.title;
    todos.description = req.body.description;
    todos.deadline = req.body.deadline;
    todos.status = false;

    await todoRepository.save(todos);
    return res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/", async (req, res, next) => {
  try {
    todoRepository.delete(req.body.deleteTodoId);
    return res.status(200).json(req.body.todoId);
  } catch (error) {
    console.log(error);
  }
});

router.put("/", async (req, res, next) => {
  try {
    console.log(req.body.data.todoStatus);
    await todoRepository.update(req.body.data.todoId, {
      status: req.body.data.todoStatus,
    });
    const response = await todoRepository.find({
      select: {
        id: true,
        status: true,
      },
      where: {
        id: req.body.data.todoId,
      },
    });

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
});

export default router;
