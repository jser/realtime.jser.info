---
title: An additional non-backtracking RegExp engine · V8
author: azu
layout: post
itemUrl: 'https://v8.dev/blog/non-backtracking-regexp'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/01/index.json'
date: '2021-01-12T02:02:10Z'
tags:
  - V8
  - RegExp
  - article
---
V8にバックトラックをしない正規表現エンジンをフラグ付きで実装したという話。
バックトラックによってReDoSのような指数関数的にマッチする問題が知られていて、これを解決するためにバックトラックを使わないアルゴリズムの実装をしたという話
