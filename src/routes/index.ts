import * as express from "express";
import { Request, Response, NextFunction } from "express";
import signUp from "./api/signUp";
import login from "./api/login";
import todo from "./api/todo";

const router = express.Router();

router.use("/sign-up", signUp);
router.use("/login", login);

router.use("/todo", todo);

export default router;
