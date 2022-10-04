---
title: Postgres WASM by Snaplet and Supabase
author: azu
layout: post
itemUrl: 'https://supabase.com/blog/postgres-wasm'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/10/index.json'
date: '2022-10-04T12:47:30Z'
tags:
  - PostgreSQL
  - WebAssembly
  - article
---
PostgreSQLのWebAssemblyビルドについて
PostgreSQLそのものをWasmへとビルドするのは難しかったため、VMを作りそれをx86エミュレータで実行する。
また、WebSocketsを使ったProxyや起動時間の最適化やイメージサイズの削減についてなど
