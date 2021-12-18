---
title: Deno 1.17 Release Notes
author: azu
layout: post
itemUrl: 'https://deno.com/blog/v1.17'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/12/index.json'
date: '2021-12-18T14:08:22Z'
tags:
  - deno
  - ReleaseNote
---
Deno 1.17リリース。
Import assertionsのサポート、リモートモジュールの型チェックをスキップする`--no-check=remote`の追加、`AbortSignal#throwIfAborted`のサポート。
また、`Deno.test`のoverloads APIを追加、`--watch`フラグで外部ファイルのWatchをサポート。
Unstableとして`Deno.connectTls()`がALPNの指定をサポート、timerがプログラムの終了をブロックさせなくする`Deno.unrefTimer`の追加など。
