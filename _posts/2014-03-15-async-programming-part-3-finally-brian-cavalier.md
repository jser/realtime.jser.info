---
title: 'Async Programming Part 3: Finally - Brian Cavalier'
author: azu
layout: post
itemUrl: 'http://briancavalier.github.io/async-programming-part-3-finally'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2014/03/index.json'
date: '2014-03-15T13:36:26+00:00'
tags:
  - Promises
  - debug
---
Promisesでのエラーハンドリングのプラクティス。try-catchとpromiseの場合の違い。
`otherwise` は `catch` と同じ。
promiseを処理するfinally的なものを書くときに、渡した値を捨てないようにする
