import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { User } from "../../../entity/User";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../../../ormconfig";
import * as bcrypt from "bcrypt";
import { UserError, ServerError } from "../../../helper/errorHandleHelper";
import { jwtHelper } from "../../../helper/jwtHelper";
import ms = require("ms");

const router = express.Router();
const userRepository = AppDataSource.getRepository(User);

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userRepository.findOne({
      where: { email: req.body.email },
    });

    if (user) {
      throw new UserError(400, "USERS_ALREADY_EXISTS_USER");
    }
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    if (!hashPassword) {
      throw new ServerError(500, "SERVER_ERROR");
    }

    await userRepository.insert({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashPassword,
      createdAt: new Date(),
      updateAt: new Date(),
    });
    const result = await userRepository.find({
      select: {
        id: true,
        firstName: true,
        lastName: true,
      },
      where: { email: req.body.email },
    });

    const jwtToken = jwtHelper.createToken({ userId: result[0].id });
    return res
      .status(200)
      .cookie("jwtToken", jwtToken, {
        httpOnly: true,
        expires: new Date(Date.now() + ms("2d")),
      })
      .json(result);
  } catch (error) {
    if (error instanceof Error) {
      res.json({ message: error.message });
    }
  }
});

export default router;
