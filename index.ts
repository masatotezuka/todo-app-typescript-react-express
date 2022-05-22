import express, { Request, Response, NextFunction } from "express";

const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello");
});

//セッション

//ルーティング

app.listen(8000);

//
