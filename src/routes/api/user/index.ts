import * as express from "express";
import { AppDataSource } from "../../../../ormconfig";
import { User } from "../../../entity/User";
import { createUuid } from "../../../helper/createUuid";
import { UserError, ServerError } from "../../../helper/errorHandleHelper";
import { sendMail } from "../../../helper/sendMail";
import * as bcrypt from "bcrypt";
const router = express.Router();
const userRepository = AppDataSource.getRepository(User);

router.post("/resetPassword", async (req, res, next) => {
  try {
    if (!req.body.email) {
      throw new UserError(400, "USERS_INVALID_VALUE");
    }

    const token = createUuid();
    const tokenExpiredAt = new Date();
    tokenExpiredAt.setHours(tokenExpiredAt.getHours() + 12);

    await userRepository.update(
      { email: req.body.email },
      { verificationToken: token, verificationTokenExpiredAt: tokenExpiredAt }
    );

    // const verificationUrl = `http://localhost:3000/verification-password/${token}`;
    const verificationUrl = `http://localhost:3000/verification-password`;
    await sendMail(req.body.email, verificationUrl);
    res.locals.lastName = "tezuka";
    return res.status(200).json({ verificationToken: token });
  } catch (error) {
    console.log(error);
  }
});

router.put("/verification-password", async (req, res, next) => {
  try {
    console.log(req.body);
    const password = req.body.data.password;
    if (!password) {
      throw new UserError(400, "USER_INVALID_ERROR");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    if (!hashPassword) {
      throw new ServerError(500, "SERVER_ERROR");
    }

    await userRepository.update(
      { id: 1 },
      {
        password: hashPassword,
        verificationToken: null,
        verificationTokenExpiredAt: null,
      }
    );
    res.status(200).send("SUCCESS");
  } catch (error) {
    console.log(error);
  }
});

export default router;
