import * as express from "express";
import { Request, Response, NextFunction } from "express";
import signUp from "./api/signUp";

const router = express.Router();

router.use("/sign-up", signUp);

export default router;
