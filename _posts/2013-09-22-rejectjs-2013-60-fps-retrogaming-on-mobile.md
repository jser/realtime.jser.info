---
title: Reject.JS 2013 - 60 FPS retrogaming on mobile
author: azu
layout: post
itemUrl: 'http://gmarty.github.io/jsSMS/Reject.JS-2013-Slides/#/intro'
date: '2013-09-22T05:42:16.620Z'
tags:
  - JavaScript
  - スライド
  - game
---
JavaScriptで書くエミュレータについてのスライド。
ROMからOpCodeを取り出してインタープリター的に処理すると簡潔だが速度的な問題がでる。
そこでROMからJavaScript関数を生成するような仕組み(Recompiler)を入れる。
* Prase
* Analyser
* optimiser
* Generator
このRecompilerを静的と動的で行う事で速度を改善する話
