import * as express from "express";
import { Request, Response, NextFunction } from "express";
import signUp from "./api/signUp";
import login from "./api/login";
import todo from "./api/todo";
import { jwtHelper } from "../helper/jwtHelper";
import ms = require("ms");
import * as jwt from "jsonwebtoken";

const router = express.Router();

router.use("/sign-up", signUp);
router.use("/login", login);

router.get("/tokenVerification", (req, res, next) => {
  let token = "";
  if (req.cookies.jwtToken) {
    token = req.cookies.jwtToken;
  } else {
    return res.status(401);
  }

  jwt.verify(token, "secret123", function (err, decoded) {
    if (err) {
      next(err.message);
    } else {
      console.log(decoded);
      const token = jwtHelper.createToken();
      res.cookie("jwtToken", token, {
        httpOnly: true,
        expires: new Date(Date.now() + ms("2d")),
      });
      res.status(200).json({ isAuthenticated: true });
    }
  });
});

router.use("/todo", todo);

export default router;
