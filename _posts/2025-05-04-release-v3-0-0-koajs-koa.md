---
title: Release v3.0.0 · koajs/koa
author: azu
layout: post
itemUrl: 'https://github.com/koajs/koa/releases/tag/v3.0.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2025/05/index.json'
date: '2025-05-04T05:50:40Z'
tags:
  - nodejs
  - ReleaseNote
relatedLinks:
  - title: koa/docs/migration-v2-to-v3.md at master · koajs/koa
    url: 'https://github.com/koajs/koa/blob/master/docs/migration-v2-to-v3.md'
---
Koa v3.0.0リリース。
Node.js 18未満のサポート終了、Generatorを使ったMiddlewaのサポートを終了、`res.redirect(&#039;back&#039;)`を削除し`ctx.back()`を追加。
`app.currentContext`でAsyncLocalStorageを使用した現在のコンテキスト取得をサポート。`Blob`/`ReadableStream`/`Response`のサポート、カスタムストリームのサポートなど
