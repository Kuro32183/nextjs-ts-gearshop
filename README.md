## TypeScriptとReact/Next.jsでつくる実践Webアプリケーション

「[TypeScriptとReact/Next.jsでつくる実践Webアプリケーション](https://gihyo.jp/book/2022/978-4-297-12916-3)」のサンプルアプリ

![サンプルアプリ](https://user-images.githubusercontent.com/2387508/178550902-a7c1e47b-a322-413c-b9ad-2ffff79e041d.png)

## 初版からのアップデート

- [ビルドが失敗する問題を修正](https://github.com/gihyo-book/ts-nextbook-app/pull/6)
- [Storybookが最新のNext.jsで動作しない問題を修正](https://github.com/gihyo-book/ts-nextbook-app/pull/5)

## 環境

- Node.js: 16.14.0
- Next.js: 12.2.3
- React: 18.2.0

## インストール

```bash
npm install
```

## 環境変数の設定

.envを開く

```
API_BASE_URL=<バックエンドAPIへのベースURLの設定>
NEXT_PUBLIC_API_BASE_PATH=/api/proxy
```

## 開発サーバー起動

開発サーバーの起動し、http://localhost:3000/ にアクセス

```
npm run dev
```

## Storybook起動

Storybookを起動し、http://localhost:6006/ にアクセス

```
npm run storybook
```

## テスト実行

ユニットテスト実行

```
npm run test
```

## ソースコードリンター・フォーマッター

ソースコードをリンターでチェック

```
npm run lint
```

ソースコードをフォーマッターで整形

```
npm run format
```

## ディレクトリ構成

簡単にディレクトリ構成を以下に説明します。

```
├── .editorconfig
├── .env <-- 環境変数
├── .env.production <-- 本番用環境変数
├── .eslintrc.json <-- ESLint設定ファイル
├── README.md
├── jest.config.js <-- Jestの設定ファイル
├── jest.setup.js <-- テストファイルが実行される前に走る
├── next-env.d.ts
├── next.config.js <-- Next.js設定ファイル
├── package-lock.json
├── package.json
├── public
├── src
│   ├── components <-- Presentational Components
│   ├── containers <-- Container Compoments
│   ├── contexts <-- React Context
│   ├── pages <-- Next.jsのページ
│   ├── services <-- Web API Client
│   ├── themes <-- styled-componentsのテーマ
│   ├── types <-- 型定義
│   └── utils <-- 汎用関数
└── tsconfig.json
```
# nextjs-ts-gearshop


NEXTJS MATTER
Overview
An interactive website sample where textures fall on click events.

Description
Matter.js is a JavaScript 2D physics engine library that can be implemented on the Web. Developed physics, fall time adjustment, click event, Mouse Constraint, and responsive design from Next.js and Matter.js Hosting uses Vercel.

Demo
demo


Requirement
Requirement

Licence
MIT

Author
Kuro32183

This is a Next.js project bootstrapped with create-next-app.

Getting Started
First, run the development server:

npm run dev
# or
yarn dev
Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying pages/index.js. The page auto-updates as you edit the file.

API routes can be accessed on http://localhost:3000/api/hello. This endpoint can be edited in pages/api/hello.js.

The pages/api directory is mapped to /api/*. Files in this directory are treated as API routes instead of React pages.

Learn More
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.
You can check out the Next.js GitHub repository - your feedback and contributions are welcome!

Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details.
