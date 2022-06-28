import * as jwt from "jsonwebtoken";

export class jwtHelper {
  static createToken() {
    const jweSecret = "secret123";
    const loginToken = jwt.sign({ foo: "bar" }, jweSecret, {
      expiresIn: "30d",
    });
    return loginToken;
  }
}
