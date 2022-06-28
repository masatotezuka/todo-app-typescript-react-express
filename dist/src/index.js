"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ormconfig_1 = require("../ormconfig");
// establish database connection
ormconfig_1.AppDataSource.initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization:", err);
});
var app = express();
app.use("/signUp");
app.get("/", function (req, res, next) {
    res.send("Hello");
});
//セッション
//ルーティング
app.listen(8000);
console.log("ss");
//# sourceMappingURL=index.js.map