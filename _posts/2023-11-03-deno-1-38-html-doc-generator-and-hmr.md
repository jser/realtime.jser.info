---
title: 'Deno 1.38: HTML doc generator and HMR'
author: azu
layout: post
itemUrl: 'https://deno.com/blog/v1.38'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/11/index.json'
date: '2023-11-03T00:10:14Z'
tags:
  - deno
  - ReleaseNote
---
Deno v1.38リリース。
`deno doc --html`で静的なHTMLなドキュメントを生成をサポート。
`--unstable-hmr`でHMRをサポート、`--unstable-byonm`でnpmなどでインストールした`node_modules`のnpmパッケージを利用できるように、`node:*`をサポート。
`deno run --env`で`.env`のロードをサポート、`std/http`で`EventSource` APIのサポートなど。
その他には、`http/server`の非推奨化、`std/io`の非推奨化、`std/wasi`の非推奨化などが含まれている。
