---
title: 'coder/ghostty-web: Ghostty for the web with xterm.js API compatibility'
author: azu
layout: post
itemUrl: 'https://github.com/coder/ghostty-web?tab=readme-ov-file'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/01/index.json'
date: '2026-01-15T23:55:19Z'
tags:
  - WebAssembly
  - library
  - terminal
  - JavaScript
---
ブラウザ上で動作するターミナルエミュレータライブラリ。
`libghostty`をWasmにコンパイルして利用し、xterm.js互換のAPIを提供する。
xterm.jsと比較して複雑な文字体系の正しいグラフェム処理、XTPUSHSGR/XTPOPSGRのサポートなどがある。
