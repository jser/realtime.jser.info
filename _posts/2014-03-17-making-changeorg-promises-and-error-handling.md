---
title: Making Change.org — Promises and Error Handling
author: azu
layout: post
itemUrl: 'http://making.change.org/post/69613524472/promises-and-error-handling'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2014/03/index.json'
date: '2014-03-17T13:50:45.614Z'
tags:
  - Promises
  - debug
  - JavaScript
relatedLinks:
  - title: 'あなたが読むべきJavaScript Promises | JSer.info'
    url: 'http://jser.info/post/77696682011/es6-promises'
---
Promisesのエラーハンドリングについて。
rejectする時はエラーオブジェクトを渡す、onRejectが呼ばれないパターンと`catch`の活用、`finally`はcleanupに使う、`done` を呼ぶことで次の処理に移る場合はエラーの時も忘れずに呼ぶ
