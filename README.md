# react-express-todoApp

## 環境構築

#### 1. レポジトリをローカルにクローンする.

```
git clone https://github.com/masatotezuka/todo-app-typescript-react-express.git
```

#### 2. node のインストール

- https://github.com/nvm-sh/nvm#install-script

`nvm install v14.18.1`

#### 2. npm のインストール

サーバーサイドのパッケージインストール

```
npm ci
```

クライアントサイドのパッケージインストール

```
cd frontend
npm ci
```

#### 3. postgreSQL の起動

```
brew services start postgresql;
psql
CREATE DATABASE todo_app_development OWNER my_dev;
```

データベースが作成できているか確認

```
 \l
```

#### 4. DB マイグレーション

```
npm run typeorm migration:run
```

#### 5. サーバーを立ち上げる

```
npm run dev
```
