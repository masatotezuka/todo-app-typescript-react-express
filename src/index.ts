import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { User } from "./entity/User";
import { AppDataSource } from "../ormconfig";

// establish database connection
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello");
});

//セッション

//ルーティング

app.listen(8000);
console.log("ss");
