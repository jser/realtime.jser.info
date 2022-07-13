---
title: NestJS製GraphQLサーバの起動が遅かったので調査した話 - もうずっといなかぐらし
author: azu
layout: post
itemUrl: 'https://katainaka0503.hatenablog.com/entry/2022/07/09/190340'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/07/index.json'
date: '2022-07-13T06:59:47Z'
tags:
  - TypeScript
  - Tools
  - article
---
GraphQLのスキーマからTypeScriptのファイルを生成するツールのボトルネックを調べて修正した話。
`0x`を使ったボトルネック分析、`ts-morph`でのTypeScript ASTの変換のパフォーマンス問題の修正についてなど

