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
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
