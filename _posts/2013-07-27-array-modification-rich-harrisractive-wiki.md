---
title: Array modification · Rich-Harris/Ractive Wiki
author: azu
layout: post
itemUrl: 'https://github.com/Rich-Harris/Ractive/wiki/Array-modification#performance-and-ui-benefits'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2013/07/index.json'
date: '2013-07-27T14:23:16.703Z'
tags:
  - JavaScript
  - DOM
---
Ractive.jsは配列の変更をPrototype chain injectionを使って検知して、
配列元にDOMを生成している場合、その配列の変更の差分を考えてDOMの操作を行なっている.(DOMの変更範囲を抑えてる)
