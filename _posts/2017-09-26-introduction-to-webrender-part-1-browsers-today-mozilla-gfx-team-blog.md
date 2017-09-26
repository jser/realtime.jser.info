---
title: Introduction to WebRender – Part 1 – Browsers today – Mozilla Gfx Team Blog
author: azu
layout: post
itemUrl: >-
  https://mozillagfx.wordpress.com/2017/09/21/introduction-to-webrender-part-1-browsers-today/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/09/index.json'
date: '2017-09-26T00:35:56Z'
tags:
  - browser
  - firefox
  - servo
  - article
---
ServoのWebRenderを例にしてメジャーブラウザのレンダリングの仕組みについて解説している。
`frame tree`と呼ばれる各要素ツリーのレイアウト結果から、`display list`と呼ばれるフラットな描画コマンドを作成する。その描画結果を`layer`に乗せ、最後に`layer`を`compositing`で合成する。
各ブラウザに差異はあるが描画と合成を分けるという手法は、現在のウェブブラウザでは取り入れられている。
