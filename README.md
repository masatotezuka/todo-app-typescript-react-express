# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

# react-express-todoApp

## 環境構築

#### 1. レポジトリをローカルにクローンする.

```
git clone https://github.com/masatotezuka/todo-app-typescript-react-express.git
```

#### 2. npm のインストール

```
npm ci
```

#### 3. postgreSQL の起動

```
brew services start postgresql;
CREATE DATABASE todo_app_development OWNER my_dev;
```

#### 4. DB マイグレーション（MySQL）

```
npx sequelize-cli db:migrate
```

#### 5. サーバーを立ち上げる

```
npm start
```
