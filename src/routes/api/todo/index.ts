import * as express from "express";
import { RequestHandler } from "express";
import { AppDataSource } from "../../../../ormconfig";
import { Todo } from "../../../entity/Todo";
import { User } from "../../../entity/User";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const todoRepository = AppDataSource.getRepository(Todo);

    // const newTodo = await AppDataSource.manager.insert(Todo, {
    //   title: req.body.title,
    //   description: req.body.description,
    //   deadline: req.body.description,
    //   status: req.body.status,
    // });
    const todos = new Todo();
    todos.title = req.body.title;
    todos.description = req.body.description;
    todos.deadline = req.body.deadline;
    todos.status = req.body.status;
    console.log(todos);

    await todoRepository.save(todos);
    console.log("完了");
    //todoを返す（タイトル・詳細・期限・ステータス）

    return res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
});

export default router;
