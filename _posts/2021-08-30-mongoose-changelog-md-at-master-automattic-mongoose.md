---
title: mongoose/CHANGELOG.md at master · Automattic/mongoose
author: azu
layout: post
itemUrl: >-
  https://github.com/Automattic/mongoose/blob/master/CHANGELOG.md#600--2021-08-24
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/08/index.json'
date: '2021-08-30T12:43:32Z'
tags:
  - MongoDB
  - node.js
  - library
  - ReleaseNote
relatedLinks:
  - title: 'Mongoose v6.0.2: Migrating to Mongoose 6'
    url: 'https://mongoosejs.com/docs/migrating_to_6.html'
  - title: Introducing Mongoose 6.0.0 | www.thecodebarbarian.com
    url: 'https://thecodebarbarian.com/introducing-mongoose-6.html'
---
mongoose 6.0リリース。
MongoDB Driver 4.0サポート、`sanitizeFilter`と`Trusted()`メソッドの追加、`default`に関数を渡せるように、Documentの変更をProxyで検知できるように。
破壊的な変更として、`createConnection(uri)`がthenableではなくなる、同じQueryを再実行はエラーにになる,`strictQuery`オプションを`strict`にリネーム。
また、デフォルトの挙動を変更に関連して不要となったオプションの削除やTypeScriptの型定義の変更など
