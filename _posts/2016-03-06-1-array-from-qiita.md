---
title: なぜ絵文字を含む文字を1文字ずつに分けるのにArray.fromだけで十分なのか？ - Qiita
author: azu
layout: post
itemUrl: 'http://qiita.com/alucky0707/items/697598e49ff56191c139'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2016/03/index.json'
date: '2016-03-06T02:13:07+00:00'
tags:
  - JavaScript
  - ECMAScript
---
`split("")`だと絵文字などでサロゲートペアの問題が起きるため、ES6で追加された`Array.from`などを使うことで正しく扱えるという話
