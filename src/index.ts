import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { User } from "./entity/User";
import { AppDataSource } from "../ormconfig";
import api from "./routes";
import * as cors from "cors";
import { expressjwt, Request as JWTRequest } from "express-jwt";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

const corsOptions: cors.CorsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const jwtSecret = "secret123";
app.get(
  "/protected",
  expressjwt({ secret: jwtSecret, algorithms: ["HS256"] }),
  (req: JWTRequest, res: Response) => {
    if (!req.auth?.admin) return res.sendStatus(401);
    res.status(200).send("Success!");
  }
);
app.use("/api", api);

app.listen(8000);
