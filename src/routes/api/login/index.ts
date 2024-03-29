import * as express from "express";
import { AppDataSource } from "../../../../ormconfig";
import { User } from "../../../entity/User";
import { UserError } from "../../../helper/errorHandleHelper";
import * as bcrypt from "bcrypt";
import { jwtHelper } from "../../../helper/jwtHelper";
import ms = require("ms");

const router = express.Router();
const userRepository = AppDataSource.getRepository(User);
router.post("/", async (req, res, next) => {
  try {
    console.log("login");
    const user = req.body;

    if (!user.email || !user.password) {
      throw new UserError(400, "USERS_INVALID_VALUE");
    }
    const result = await userRepository.findOne({
      where: { email: user.email },
    });

    if (!result) {
      throw new UserError(400, "USERS_NOT_EXISTS_USER");
    }

    const match = await bcrypt.compare(user.password, result.password);
    if (match) {
      const jwtToken = jwtHelper.createToken(result.id);
      res
        .status(200)
        .cookie("jwtToken", jwtToken, {
          httpOnly: true,
          expires: new Date(Date.now() + ms("2d")),
        })
        .cookie("userId", result.id)
        .json({
          user: {
            id: result.id,
            firstName: result.firstName,
            lastName: result.lastName,
          },
        });
      console.log(result.lastName);
    } else {
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
