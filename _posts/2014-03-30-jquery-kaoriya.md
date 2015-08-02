---
title: jQueryのメモリーリークの傾向と対策 — KaoriYa
author: azu
layout: post
itemUrl: 'http://www.kaoriya.net/blog/2014/03/28/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2014/03/index.json'
date: '2014-03-30T06:10:24.092Z'
tags:
  - jQuery
  - JavaScript
---
jQueryは自分で要素を保持するので、jQueryのAPIを使わないで要素を削除すると強参照が残ってしまう話。
MutationObserverで監視して削除する
