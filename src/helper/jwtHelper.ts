import * as jwt from "jsonwebtoken";

export class jwtHelper {
  static createToken(payload: { userId: number }) {
    const jweSecret = "secret123";
    const loginToken = jwt.sign(payload, jweSecret, { expiresIn: "30d" });
    return loginToken;
  }
}
