---
title: Fixing a Memory Leak in a Production Node.js App
author: azu
layout: post
itemUrl: 'https://kentcdodds.com/blog/fixing-a-memory-leak-in-a-production-node-js-app'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/01/index.json'
date: '2023-01-22T14:27:49Z'
tags:
  - node.js
  - JavaScript
  - debug
  - article
  - video
---
Node.jsのアプリケーションでメモリリークが発生し、実際にどのようにデバッグして問題を見つけていったかという記事。
動画では`shiki`が使う`vscode-oniguruma`のメモリ解放処理を呼んでいないことが原因だと判断し、Workerで処理するように変更した。
しかし、実際には`express-http-proxy`がリクエストURLを保持していて、Image CDNのURLが長いためメモリを圧迫していた。
