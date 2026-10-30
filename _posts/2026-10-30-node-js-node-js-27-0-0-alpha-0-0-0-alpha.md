---
title: Node.js — Node.js 27.0.0-alpha.0.0.0 (Alpha)
author: azu
layout: post
itemUrl: 'https://nodejs.org/en/blog/release/v27.0.0-alpha.0.0.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/10/index.json'
date: '2026-10-30T01:02:24Z'
tags:
  - nodejs
  - ReleaseNote
---
Node.js v27.0.0-alpha.0.0.0リリース。
破壊的変更として、ヒープ上限の既定値を変更し、`Buffer`/`ArrayBuffer`のメモリも上限に算入するように変更。
`v8.serialize()`の出力形式を変更し、旧バージョンでの読み込みに非対応となる。
V8 15.6へアップデートと`Math.sumPrecise()`/`Iterator.zip()`などをサポート。
`node:vfs`のフラグなしに変更、環境変数へのアクセスを制御する`--allow-env`を追加、実験的な`net/promises` APIの追加など
