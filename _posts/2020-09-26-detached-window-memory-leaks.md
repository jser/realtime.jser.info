---
title: Detached window memory leaks
author: azu
layout: post
itemUrl: 'https://web.dev/detached-window-memory-leaks/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/09/index.json'
date: '2020-09-26T11:24:38Z'
tags:
  - JavaScript
  - DOM
  - article
---
`window.open`で開いたウィンドウにおけるメモリリークについて。
切り離したwindowでメモリリークが起きる原理、heap snapshotや`performance.memory` APIでのメモリの増減の見方。
またメモリリークを避ける方法としてリファレンスを消す方法、WeakRefを使う方法、直接のリファレンスを持たない方法についてなど
