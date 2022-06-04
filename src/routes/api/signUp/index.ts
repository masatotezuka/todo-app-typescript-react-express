import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { User } from "../../../entity/User";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../../../ormconfig";
import * as bcrypt from "bcrypt";
import { UserError, ServerError } from "../../../helper/errorHandleHelper";
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
    const newUser = await AppDataSource.manager.findOne(User, {
      where: { email: req.body.email },
    });
    console.log("新規" + newUser);
    //セッション作成

    res.status(200).json({ authorization: true });
  } catch (error) {
    if (error instanceof Error) {
      res.json({ message: error.message });
    }
  }
});

export default router;
