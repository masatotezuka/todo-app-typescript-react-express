import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { User } from "./entity/User";
import { AppDataSource } from "../ormconfig";
import api from "./routes";
import * as cors from "cors";
import * as dotenv from "dotenv";
import * as cookieParser from "cookie-parser";

dotenv.config();

const app = express();

const corsOptions: cors.CorsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

app.use("/api", api);

app.listen(8000);
