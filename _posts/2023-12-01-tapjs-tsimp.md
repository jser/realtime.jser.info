---
title: tapjs/tsimp
author: azu
layout: post
itemUrl: 'https://github.com/tapjs/tsimp'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/12/index.json'
date: '2023-12-01T08:15:10Z'
tags:
  - TypeScript
  - nodejs
  - library
---
ts-nodeのようにTypeScriptのコードを型チェックしながらコンパイルできるローダー。
Node.js 20からサポートされている`Module.register()`を使って`node --import`で動作する。またデーモンとキャッシュを使うことで、不要な処理をスキップできる。
