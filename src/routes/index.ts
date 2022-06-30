import * as express from "express";
import { Request, Response, NextFunction } from "express";
import signUp from "./api/signUp";
import login from "./api/login";
import logout from "./api/logout";
import todo from "./api/todo";
import user from "./api/user";
import { jwtHelper } from "../helper/jwtHelper";
import ms = require("ms");
import * as jwt from "jsonwebtoken";

const router = express.Router();

router.use("/sign-up", signUp);
router.use("/login", login);
router.use("/logout", logout);
router.use("/user", user);

router.get("/tokenVerification", (req, res, next) => {
  let token = "";
  console.log("check");

  if (req.cookies.jwtToken) {
    token = req.cookies.jwtToken;
  } else {
    console.log("no token");

    return res.status(200).json({ isAuthenticated: false });
  }

  jwt.verify(token, "secret123", function (err, decoded) {
    if (err) {
      next(err.message);
    } else {
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
