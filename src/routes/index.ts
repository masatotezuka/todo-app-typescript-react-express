import * as express from "express";
import signUp from "./api/signUp";
import login from "./api/login";
import logout from "./api/logout";
import todo from "./api/todo";
import user from "./api/user";
import { jwtHelper } from "../helper/jwtHelper";
import ms = require("ms");

const router = express.Router();

router.use("/sign-up", signUp);
router.use("/login", login);
router.use("/logout", logout);
router.use("/user", user);

router.get("/tokenVerification", (req, res, next) => {
  let token = "";
  if (req.cookies.jwtToken) {
    token = req.cookies.jwtToken;
  } else {
    return res.status(200).json({ isAuthenticated: false });
  }
  const decode = jwtHelper.verifyToken(token);
  if (decode) {
    const token = jwtHelper.createToken();
    res.cookie("jwtToken", token, {
      httpOnly: true,
      expires: new Date(Date.now() + ms("2d")),
    });
    res.status(200).json({ isAuthenticated: true });
  }
});

router.use("/todo", todo);

export default router;
