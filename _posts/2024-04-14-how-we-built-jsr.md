---
title: How we built JSR
author: azu
layout: post
itemUrl: 'https://deno.com/blog/how-we-built-jsr'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/04/index.json'
date: '2024-04-14T13:44:57Z'
tags:
  - deno
  - JavaScript
  - npm
  - article
relatedLinks:
  - title: >-
      feat: Add fast-check based TypeScript type definition generation by
      marvinhagemeister · Pull Request #379 · denoland/deno_graph
    url: 'https://github.com/denoland/deno_graph/pull/379'
---
JSRの技術的な作りについて。
APIサーバはRustで書かれていて、DBにはPostgresを利用している。
フロントエンドにはFreshを使ったIslandsアーキテクチャにしている。
Freshを動かすRendering Serverは各地にデプロイされるがAPI ServerはUSのみなので、Server間のやり取りでウォーターフォールが起きないようにまとめている。
また、npmの互換レイヤーであるtarballを作成するときに.tsから.d.tsを生成する処理をRustで書いている点についてなど
