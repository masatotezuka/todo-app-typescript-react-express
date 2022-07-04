import * as nodemailer from "nodemailer";

export async function sendMail(to: string, verificationUrl: string) {
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
}
