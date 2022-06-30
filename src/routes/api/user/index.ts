import * as express from "express";
import { AppDataSource } from "../../../../ormconfig";
import { User } from "../../../entity/User";
import { createUuid } from "../../../helper/createUuid";
import { UserError } from "../../../helper/errorHandleHelper";
import { sendMail } from "../../../helper/sendMail";

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

    const verificationUrl = `http://localhost:3000/verification-password`;
    sendMail(req.body.email, verificationUrl).catch(console.error);

    //フロントエンドでtokenを送信できるようにする
    res.status(200).send("success");
  } catch (error) {
    console.log(error);
  }
});

export default router;
