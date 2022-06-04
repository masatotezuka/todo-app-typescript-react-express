"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "my_dev",
    password: null,
    database: "todo_app_development",
    synchronize: false,
    // logging: false,
    entities: ["./src/entity/*.ts"],
    migrations: ["./src/migration/*.ts"],
    subscribers: [],
    migrationsTableName: "migration",
});
exports.AppDataSource.initialize();
// export default AppDataSource;
//# sourceMappingURL=ormconfig.js.map