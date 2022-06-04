import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "my_dev",
  password: undefined,
  database: "todo_app_development",
  synchronize: false,
  // logging: false,
  entities: ["./src/entity/*.ts"],
  migrations: ["./src/migration/*.ts"],
  subscribers: [],
  migrationsTableName: "migration",
});
AppDataSource.initialize();

// export default AppDataSource;
