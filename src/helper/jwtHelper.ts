import * as jwt from "jsonwebtoken";

export class jwtHelper {
  static jweSecret = "secret123";
  static createToken() {
    const token = jwt.sign({ foo: "bar" }, this.jweSecret, {
      expiresIn: "30d",
    });
    return token;
  }
  static verifyToken(token: string) {
    try {
      const decoded = jwt.verify(token, this.jweSecret);
      return decoded;
    } catch (err) {
      // err
      console.log(err);
    }

    //     const result = jwt.verify(token, this.jweSecret);
    // if (result) {
    // } else {
    // }
    // , function (err, decoded) {
    // if (err) {
    //   throw new Error("INVALID_SIGNATURE");
    // } else {
    //   return decoded;
    // }
    // });
  }
}
