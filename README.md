
# nextjs-ts-gearshop　:guitar:


## デモ

![demo](https://media.giphy.com/media/vRN7Fy0ZWNPmlHMUoc/giphy.gif)


## 概要　:speech_balloon:

Next.jsのデモアプリを作成しました。
フロントエンドはNext.jsとTypescriptでVercelへデプロイ,バックエンドのモックAPIはjson-server（[ソースコードはこちらを参照](https://github.com/Kuro32183/json-gearshop-backend)）を使用しておりHerokuへデプロイ。
ユーザー認証、カート機能、検索機能、出品システムを備えています。


## 環境　:ocean:

- Node.js: 16.14.0
- Next.js: 12.2.3
- React: 18.2.0

## ディレクトリ構成　:books:

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

## インストール　:feet:

```bash
npm install
```

## 使用方法　:paperclip:

```bash
git clone https://github.com/Kuro32183/nextjs-ts-gearshop.git
cd examples

```

## 開発サーバー起動 :computer:

開発サーバーの起動し、http://localhost:3000/ にアクセス

```
npm run dev
```

## Storybook起動　:book:

Storybookを起動し、http://localhost:6006/ にアクセス

```
npm run storybook
```

## テスト実行　:eyes:

ユニットテスト実行

```
npm run test
```

## ソースコードリンター・フォーマッター　:shower:

ソースコードをリンターでチェック

```
npm run lint
```

ソースコードをフォーマッターで整形

```
npm run format
```

## Author　:sunglasses:

* Kuro32183
* takumi32183@gmail.com

## License　:email:

"Retro Gear" is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).

"Retro Gear" is Confidential.
