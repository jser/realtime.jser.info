---
title: Promise-based functions should not throw exceptions
author: azu
layout: post
itemUrl: 'http://www.2ality.com/2016/03/promise-rejections-vs-exceptions.html'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2016/03/index.json'
date: '2016-03-26T02:51:03Z'
tags:
  - JavaScript
  - ECMAScript
  - Promises
relatedLinks:
  - title: JavaScript Promiseの本
    url: 'http://azu.github.io/promises-book/#not-throw-use-reject'
---
Promiseをベースとしてるasync/awaitを見据えながら、Promiseを返す関数は例外を投げないで`reject`したPromiseオブジェクトを返すべきという話
