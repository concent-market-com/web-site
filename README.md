# 西宮・夙川のパン屋さん「コンセントマーケット」

## 更新用リンク

| 項目     | ファイル                                                                        |
| -------- | ------------------------------------------------------------------------------- |
| 夙川本店 | https://github.com/concent-market-com/web-site/edit/main/src/data/shukugawa.ts  |
| 宝塚店   | https://github.com/concent-market-com/web-site/edit/main/src/data/takarazuka.ts |
| 求人     | https://github.com/concent-market-com/web-site/edit/main/src/data/recruit.ts    |

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
