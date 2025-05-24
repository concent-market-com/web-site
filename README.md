# 西宮・夙川のパン屋さん「コンセントマーケット」

## テキスト更新用リンク

| 項目       | ファイル                                                                             |
| ---------- | ------------------------------------------------------------------------------------ |
| 夙川本店   | https://github.com/concent-market-com/web-site/edit/main/src/data/main/shukugawa.ts  |
| 宝塚店     | https://github.com/concent-market-com/web-site/edit/main/src/data/main/takarazuka.ts |
| 求人       | https://github.com/concent-market-com/web-site/edit/main/src/data/main/recruit.ts    |
| 問い合わせ | https://github.com/concent-market-com/web-site/edit/main/src/data/main/contact.ts    |

### 画像を更新する方法

1. 画像を用意します。
2. 画像ファイル名に日本語が使われている場合、英数字のファイル名に変更します
3. https://github.com/concent-market-com/web-site/tree/main/src/assets/images にアクセスして、右上の `Add file` > `Upload files` からファイルをアップロードしてコミットします。
4. URLは、 `/images/` + ファイル名となります。例えば `104380ga10000003.jpg` というファイルをアップロードした場合、 `/images/104380ga10000003.jpg` を https://github.com/concent-market-com/web-site/edit/main/src/data/images.ts の該当するところに記述ください。

```diff
  const _heroPaths: string[] = [
    '/images/IMG_6931.JPG',
    '/images/IMG_9691.JPG',
    '/images/IMG_4521.JPG',
-   '/images/IMG_4555.JPG',
+   '/images/104380ga10000003.jpg',
  ];
```

### 更新に失敗した

ビルドに必要な情報を間違って削除してしまったり、フォーマットを変更してしまった時、Webサイトには反映されずに更新できなかったという通知が更新を行ったユーザのメールアドレスにいきます。更新後に反映されなかった場合は、メールをご確認ください。

## 構成

### 本体

Angular SSRのPrerendering（SSG）で構築されています。SSRを必要としない構成であることから、ビルドファイルの `server` はアップロードしません。

### スクリプト

ts-nodeで実行する `generate-image.ts` が用意されています。これは、ビルド前（ `npm run prebuild` ）に、 `src/assets/images` の中身から以下を実行します。

1. 横幅320/1280/1920pxの画像を生成して、 `src/assets/generated/images` に保存
2. 画像情報（widthやheight）をとりまとめて、 `src/generated/images.json` に保存

## ライセンス

### テキスト・写真データ

本レポジトリにあるテキスト、写真データは著作権をコンセントマーケット運営会社である株式会社Ｓａｕｄｅが有しており、**オープンソースではありません**。本レポジトリをForkすることの制限はありませんが、それ以外の場所で引用の範囲を越える利用については固くお断りしています。

### ソースコード

ソースコード（テキスト・写真データ以外）はMITライセンスで公開しています。
