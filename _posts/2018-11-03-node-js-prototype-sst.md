---
title: Node.jsにおけるprototype汚染攻撃への対策 - SSTエンジニアブログ
author: azu
layout: post
itemUrl: 'https://techblog.securesky-tech.com/entry/2018/10/31/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/11/index.json'
date: '2018-11-03T15:31:30Z'
tags:
  - JavaScript
  - security
  - article
---
Prototype pollution攻撃への対応方法について。
Mapや`Object.create(null)`で`__proto__`の上書きを防ぐ方法、ネイティブの実装を上書きしてしまう方法などについて
