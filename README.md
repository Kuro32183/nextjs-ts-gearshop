## TypeScriptとReact/Next.jsでつくる実践Webアプリケーション

「[TypeScriptとReact/Next.jsでつくる実践Webアプリケーション](https://gihyo.jp/book/2022/978-4-297-12916-3)」のサンプルアプリ

![サンプルアプリ](https://user-images.githubusercontent.com/2387508/178550902-a7c1e47b-a322-413c-b9ad-2ffff79e041d.png)

## 初版からのアップデート

- [ビルドが失敗する問題を修正](https://github.com/gihyo-book/ts-nextbook-app/pull/6)
- [Storybookが最新のNext.jsで動作しない問題を修正](https://github.com/gihyo-book/ts-nextbook-app/pull/5)


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



簡単にディレクトリ構成を以下に説明します。




# nextjs-ts-gearshop

## デモ

"hoge"の魅力が直感的に伝えわるデモ動画や図解を載せる

## 概要

"hoge"のセールスポイントや差別化などを説明する

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
npm run dev
```

# 使用方法

```bash
git clone https://github.com/hoge/~
cd examples

```

# Note

注意点などがあれば書く

# Author

作成情報を列挙する

* 作成者
* 所属
* E-mail

# License
ライセンスを明示する

"hoge" is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).

社内向けなら社外秘であることを明示してる

"hoge" is Confidential.
