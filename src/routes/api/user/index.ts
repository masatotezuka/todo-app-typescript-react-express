import * as express from "express";
import { AppDataSource } from "../../../../ormconfig";
import { User } from "../../../entity/User";
import { createUuid } from "../../../helper/createUuid";
import { UserError } from "../../../helper/errorHandleHelper";
import * as nodemailer from "nodemailer";
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

    const verificationUrl = `http://localhost:3000/verification-password`;

    sendMail(req.body.email, verificationUrl).catch(console.error);

    //フロントエンドでtokenを送信できるようにする
  } catch (error) {
    console.log(error);
  }
});

export default router;

async function sendMail(to: string, verificationUrl: string) {
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    host: process.env.MAIL_HOST,
    port: Number(process.env.PORT),
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  let info = await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: to,
    subject: "パスワードを変更してください",
    text: `パスワードのリセットを承りました。
    下記ＵＲＬより、パスワードを再設定してください。
    ${verificationUrl}`,
  });
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
