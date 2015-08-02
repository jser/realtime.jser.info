---
title: JavaScript - Promiseを使った逐次処理でユーザー入力との待ち合わせができるイベントループを記述する - Qiita
author: azu
layout: post
itemUrl: 'http://qiita.com/mizchi/items/e57cb91da5f07f5e5cfc'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2014/07/index.json'
date: '2014-07-15T12:43:15.587Z'
tags:
  - JavaScript
  - Promises
relatedLinks:
  - title: Promiseによる逐次処理 - JavaScript Promiseの本
    url: 'http://azu.github.io/promises-book/#promise-sequence'
---
ユーザー入力等のイベントをPromise化して、Promiseを使った逐次処理を行う話。
イベントでの逐次的な処理は別途回す仕組みが必要になるが、Promiseの場合はPromise化した処理に連ねて書くだけで逐次処理を行える。
