
# nextjs-ts-gearshop


## デモ

![サンプルアプリ](https://user-images.githubusercontent.com/2387508/178550902-a7c1e47b-a322-413c-b9ad-2ffff79e041d.png)

## 概要

Next.jsのフルスタックのショッピングアプリを作成しました。
フロントエンドはNext.jsとTypescriptで開発しVercelへデプロイ,バックエンドのモックAPIはjson-server（[ソースコードはこちらを参照](https://github.com/Kuro32183/json-gearshop-backend)）を使用しておりHerokuへデプロイ。
ユーザー認証、カート機能、検索機能、出品システムを備えています。


## 環境

- Node.js: 16.14.0
- Next.js: 12.2.3
- React: 18.2.0

## ディレクトリ構成

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

## インストール

```bash
npm install
```

## 使用方法

```bash
git clone https://github.com/hoge/~
cd examples

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

## Note

## Author

* Kuro32183
* takumi32183@gmail.com

## License

"Retro Gear" is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).

"Retro Gear" is Confidential.
