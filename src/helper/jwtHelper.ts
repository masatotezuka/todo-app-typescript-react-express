import * as jwt from "jsonwebtoken";

export class jwtHelper {
  static jweSecret = "secret123";
  static createToken(userId: number) {
    const token = jwt.sign({ payload: userId }, this.jweSecret, {
      expiresIn: "2d",
    });
    return token;
  }
  static verifyToken(token: string) {
    try {
      const decoded = jwt.verify(token, this.jweSecret);
      return decoded;
    } catch (err) {
      console.log(err);
    }
  }
}
