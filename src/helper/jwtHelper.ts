import * as jwt from "jsonwebtoken";

export class jwtHelper {
  static createToken(userId: number) {
    if (process.env.SECRET_KEY) {
      const token = jwt.sign({ payload: userId }, process.env.SECRET_KEY, {
        expiresIn: "2d",
      });
      return token;
    }
  }
  static verifyToken(token: string) {
    try {
      if (process.env.SECRET_KEY) {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        return decoded;
      }
    } catch (err) {
      console.log(err);
    }
  }
}
