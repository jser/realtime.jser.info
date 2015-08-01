---
title: Flux inside Web Workers — Medium
author: azu
layout: post
itemUrl: 'https://medium.com/@nsisodiya/flux-inside-web-workers-cc51fb463882'
date: '2015-07-30T09:34:50.456Z'
tags:
  - JavaScript
  - Flux
  - DOM
---
DOM lessな実装をしてればWeb Workerでも動かせる。
FluxをベースにStore->View、View->ActionをpostMessageでやりとりすることで、View以外をWeb Worker上で処理できるという話
