import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { User } from "./entity/User";
import { AppDataSource } from "../ormconfig";
import api from "./routes";
import * as cors from "cors";
const app = express();

const corsOptions: cors.CorsOptions = {
  origin: "http://localhost:3000",
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

app.use("/api", api);

//セッション

//ルーティング

app.listen(8000);
