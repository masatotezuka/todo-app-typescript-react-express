import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { User } from "../../../entity/User";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../../../ormconfig";
import * as bcrypt from "bcrypt";
import { UserError, ServerError } from "../../../helper/errorHandleHelper";
import { jwtHelper } from "../../../helper/jwtHelper";
const router = express.Router();

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await AppDataSource.manager.findOne(User, {
      where: { email: req.body.email },
    });
    if (user) {
      throw new UserError(400, "USERS_ALREADY_EXISTS_USER");
    }
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    if (!hashPassword) {
      throw new ServerError(500, "SERVER_ERROR");
    }

    await AppDataSource.manager.insert(User, {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashPassword,
      verificationToken: "ddddd",
      verificationTokenExpiredAt: new Date(),
      createdAt: new Date(),
      updateAt: new Date(),
    });
    const newUser = await AppDataSource.manager.find(User, {
      where: { email: req.body.email },
    });

    //セッション作成
    const jwtToken = jwtHelper.createToken({ userId: newUser[0].id });
    return res.status(200).cookie("jwtToken", jwtToken, { httpOnly: true });
  } catch (error) {
    if (error instanceof Error) {
      res.json({ message: error.message });
    }
  }
});

export default router;
