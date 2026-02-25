---
title: Node.js — Node.js 24.14.0 (LTS)
author: azu
layout: post
itemUrl: 'https://nodejs.org/en/blog/release/v24.14.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/02/index.json'
date: '2026-02-25T22:19:06Z'
tags:
  - nodejs
  - ReleaseNote
---
Node v24.14.0リリース。
`async_hooks`の`createHook()`に`trackPromises`オプションの追加、`fs.watch()`に`ignore`オプションの追加。
`http.setGlobalProxyFromEnv()`の追加、Subpath Importsで`#/`から始まるパスをサポート。
SQLiteのdefensive modeをデフォルトで有効化、Embedder APIでESMの初期サポートを追加。
`stream/consumers`に`bytes()`メソッドの追加、`node:test`の`run()`に`env`オプションの追加や`it.expectFailure`のサポートなど。
