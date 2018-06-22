---
title: 'V8 JavaScript Engine: V8 release v6.8'
author: azu
layout: post
itemUrl: 'https://v8project.blogspot.com/2018/06/v8-release-68.html'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/06/index.json'
date: '2018-06-22T06:18:11Z'
tags:
  - V8
  - ReleaseNote
---
V8 v6.8リリース。
関数自身が外の関数の不要な情報を持っていたのをリファクタリングしてメモリの改善。
`Object.assign`をC++からJSの実装に変更してパフォーマンス改善、`TypedArray.prototype.sort`のパフォーマンス改善など
