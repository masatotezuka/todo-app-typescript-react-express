import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../../../../ormconfig";
import { User } from "../../../entity/User";
import { UserError } from "../../../helper/errorHandleHelper";
import * as bcrypt from "bcrypt";
import { jwtHelper } from "../../../helper/jwtHelper";
import ms = require("ms");

const router = express.Router();
const userRepository = AppDataSource.getRepository(User);
router.post("/", async (req, res, next) => {
  try {
    const user = req.body;
    console.log(user);

    if (!user.email || !user.password) {
      throw new UserError(400, "USERS_INVALID_VALUE");
    }
    const result = await userRepository.findOne({
      where: { email: user.email },
    });

    if (!result) {
      throw new UserError(400, "USERS_NOT_EXISTS_USER");
    }
    //変数を作成するべきか
    // const match = await bcrypt.compare(user.password, result.password);
    if (await bcrypt.compare(user.password, result.password)) {
      const jwtToken = jwtHelper.createToken({ userId: result.id });
      res
        .status(200)
        .cookie("jwtToken", jwtToken, {
          httpOnly: true,
          expires: new Date(Date.now() + ms("2d")),
        })
        .json({
          user: {
            id: result.id,
            firstName: result.firstName,
            lastName: result.lastName,
          },
          jwtToken: jwtToken,
        });
    } else {
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
