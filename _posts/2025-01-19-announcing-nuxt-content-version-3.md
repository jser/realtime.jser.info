---
title: Announcing Nuxt Content version 3
author: azu
layout: post
itemUrl: 'https://content.nuxt.com/blog/v3'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2025/01/index.json'
date: '2025-01-19T05:44:44Z'
tags:
  - Nuxt
  - ReleaseNote
---
Nuxt Content v3リリース。
ファイルベースの代わりにPostgreSQL/Cloudflare D1/LibSQLなどのデータベースを利用できるように。
ブラウザでは、Wasm SQLiteをIn-Memory DBとして利用している。
`content.config.ts`にコレクションを定義できるように、`queryCollection` APIでコレクションを取得できるようになるなど
