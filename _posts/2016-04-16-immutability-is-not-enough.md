---
title: Immutability is not enough
author: azu
layout: post
itemUrl: 'https://codewords.recurse.com/issues/six/immutability-is-not-enough'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2016/04/index.json'
date: '2016-04-16T03:27:38+00:00'
tags:
  - JavaScript
  - 設計
---
Immutable.jsを使ったStateの更新について。
単純にStateをimmutableにして、単純に関数を逐次的に適応すると、前のStateを参照しない問題が起こりえる。
また“lost update”の問題について
