import * as express from "express";
import { AppDataSource } from "../../../../ormconfig";
import { User } from "../../../entity/User";
import { createUuid } from "../../../helper/createUuid";
import { UserError } from "../../../helper/errorHandleHelper";

const router = express.Router();
const userRepository = AppDataSource.getRepository(User);

// router.get("/", (req, res, next) => {
//   try {
//   } catch (error) {
//     console.log(error);
//   }
// });

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

    // URL作成
    //メール送信・メール文
    //フロントエンドのView作成（フォーム作成）
    //フロントエンドでtokenを送信できるようにする
  } catch (error) {
    console.log(error);
  }
});

export default router;
