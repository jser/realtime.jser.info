---
title: Blink in JavaScript - Google スライド
author: azu
layout: post
itemUrl: 'https://docs.google.com/presentation/d/1XvZdAF29Fgn19GCjDhHhlsECJAfOR49tpUFWrbtQAwU/edit#slide=id.g3840fe06e_00'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2014/05/index.json'
date: '2014-05-14T15:33:38.939Z'
tags:
  - JavaScript
  - Chrome
  - スライド
---
Blink-in-JSはDOM機能をJSで実装するメカニズム。
セキュリティ、メンテンス性、Webアーキテクチャのレイヤー化が目的
JIT化したJSはC++の20倍ぐらいのサイズになるけど遅延コンパイルで対処。
isolate,context,worldの領域を分ける、Chrome拡張のような領域の分離、world間のやり取りの動的バリデーション等によるセキュリティモデルの構築
