---
title: '&#039;return await promise&#039; vs &#039;return promise&#039; in JavaScript'
author: azu
layout: post
itemUrl: 'https://dmitripavlutin.com/return-await-promise-javascript/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/08/index.json'
date: '2021-08-23T12:54:41Z'
tags:
  - Promises
  - JavaScript
  - article
---
`return await promise`と`return promise`で動作が異なるケースについて。
`try...catch`で囲まれている場合には、`await`によってthrowされると結果が異なる
