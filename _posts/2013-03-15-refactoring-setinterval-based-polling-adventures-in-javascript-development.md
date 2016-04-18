---
title: Refactoring setInterval-based polling - Adventures in JavaScript Development
author: azu
layout: post
itemUrl: 'http://rmurphey.com/blog/2013/02/04/refactoring-setInterval-polling/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2013/03/index.json'
date: '2013-03-15T17:51:00Z'
tags:
  - javascript
  - Tips
---
setTimeIntervalで単純に回してた処理を、ちゃんと成否を確認してからsetTimeoutで回すように変更する方法やPromiseを使った方法へのリファクタリングについて
