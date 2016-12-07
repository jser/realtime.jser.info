---
title: 今年のうちに対応したい、Node.jsのBufferに潜む危険性 - Yahoo! JAPAN Tech Blog
author: azu
layout: post
itemUrl: 'https://techblog.yahoo.co.jp/advent-calendar-2016/node_new_buffer/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2016/12/index.json'
date: '2016-12-07T10:46:16Z'
tags:
  - node.js
  - JavaScript
  - security
---
Node.jsの`new Buffer`のセキュリティ的な問題点についての解説。
非推奨となった`new Buffer`の代わりとなる`Buffer.from`/`Buffer.alloc`/`Buffer.allocUnsafe`について
