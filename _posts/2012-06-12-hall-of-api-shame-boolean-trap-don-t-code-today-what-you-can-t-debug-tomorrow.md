---
title: >-
  hall of api shame: boolean trap - don't code today what you can't debug
  tomorrow
author: azu
layout: post
itemUrl: 'http://ariya.ofilabs.com/2011/08/hall-of-api-shame-boolean-trap.html'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2012/06/index.json'
date: '2012-06-12T19:30:00Z'
---
JavaScriptのメソッドで引数に真偽値を渡す設計の問題について。
その真偽値が意味してる事がわかりにくい問題など。複数の真偽値になるほど悪化したり、二重否定などはより意味合いが取りにくい
代わりにオブジェクトを引数に渡す設計にしたりするなど。
