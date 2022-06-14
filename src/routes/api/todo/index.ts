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
    console.log(todos);
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
    console.log(todos);

    await todoRepository.save(todos);
    return res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
});

export default router;
