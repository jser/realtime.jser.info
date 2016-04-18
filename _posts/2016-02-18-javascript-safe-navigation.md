---
title: JavaScript Safe Navigation
author: azu
layout: post
itemUrl: 'https://gist.github.com/dakaraphi/6a87168db66fd8f032d2'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2016/02/index.json'
date: '2016-02-18T15:04:51Z'
tags:
  - JavaScript
  - proxy
---
ProxyとSymbolを使って `?.` 的なプロパティチェインを繋げるように書く実装。
`safe(o).isNull.next.next.$` のように書ける
