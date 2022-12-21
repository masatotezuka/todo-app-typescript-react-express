# react-express-todoApp

認証付きの簡易Todoアプリです。

## 開発環境
MacBook Pro 14インチ（M1 Pro）

## 使用技術
- フロントエンド：TypeScript/React/redux-toolkit
- バックエンド：Node.js/Express/TypeORM

## 環境構築

#### 1. レポジトリをローカルにクローンする.

```
git clone https://github.com/masatotezuka/todo-app-typescript-react-express.git
```

#### 2. node のインストール

- https://github.com/nvm-sh/nvm#install-script

`nvm install v14.18.1`

#### 2. node_modules のインストール

バックエンド

```
cd todo-app-typescript-react-express
npm ci
```

フロントエンド

```
cd frontend
npm ci
cd ../
```

#### 3. postgreSQL の起動

```
brew services start postgresql;
psql
CREATE USER my_dev
CREATE DATABASE todo_app_development OWNER my_dev;
```

データベースが作成できているか確認し、終了する

```
 \l
 \q
```

#### 4. DB マイグレーション

```
npm run typeorm migration:run
```

#### 5. サーバーを立ち上げる

```
npm run dev
```
