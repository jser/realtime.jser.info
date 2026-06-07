---
title: 'On Rendering Diffs :: Pierre Computer Company'
author: azu
layout: post
itemUrl: 'https://pierre.computer/writing/on-rendering-diffs'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/06/index.json'
date: '2026-06-07T13:35:00Z'
tags:
  - JavaScript
  - performance
  - diff
  - library
  - article
---
Pierreが開発したdiffレンダリングライブラリ`@pierre/diffs`の実装解説。
巨大なコード差分をブラウザで効率的に描画するための、仮想化やメモリ最適化の手法について書かれている。
sticky positioningを反転させてスクロール中の空白表示を防ぐ手法、行範囲レンダリングでのバイナリサーチ、DOM要素を再利用することでGCを避ける作りについて。
また、Shikiによる構文ハイライトのWorkerスレッド化とLRUキャッシュについても扱っている。
