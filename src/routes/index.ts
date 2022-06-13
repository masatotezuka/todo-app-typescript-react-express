import * as express from "express";
import { Request, Response, NextFunction } from "express";
import signUp from "./api/signUp";
import todo from "./api/todo";
const router = express.Router();

router.use("/sign-up", signUp);
router.use("/todo", todo);

export default router;
