---
title: "Unoptimize V8 for Easy Debugging - Moshe's Blog"
author: azu
layout: post
itemUrl: 'http://kolodny.github.io/blog/blog/2014/05/19/unoptimize-devtools-for-easy-debugging'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2014/05/index.json'
date: '2014-05-20T05:28:07.913Z'
tags:
  - V8
  - Chrome
  - debug
---
Chrome/V8は最適化によってbreakしてもまだ変数が見えない時があるため、`eval()`によって最適化を無効にしてbreakする話
