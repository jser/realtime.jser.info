---
title: >-
  astoilkov/main-thread-scheduling: Fast and consistently responsive apps using
  a single function call
author: azu
layout: post
itemUrl: 'https://github.com/astoilkov/main-thread-scheduling'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/06/index.json'
date: '2022-06-27T14:51:11Z'
tags:
  - JavaScript
  - library
---
Main Threadでの処理をUIの表示や操作をブロックせずに行うためのスケジューリングライブラリ。
Scheduling APIを意識したAPIとなっている。
`requestIdleCallback()`や`postMessage()`などを使いキューを管理する。
また、`navigator.scheduling.isInputPending()`を使いユーザー入力をブロックしないようにタスクを実行できる。
