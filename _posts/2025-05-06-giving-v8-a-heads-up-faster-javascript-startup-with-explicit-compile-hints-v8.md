---
title: >-
  Giving V8 a Heads-Up: Faster JavaScript Startup with Explicit Compile Hints ·
  V8
author: azu
layout: post
itemUrl: 'https://v8.dev/blog/explicit-compile-hints'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2025/05/index.json'
date: '2025-05-06T05:25:29Z'
tags:
  - JavaScript
  - V8
  - article
---
`//# allFunctionsCalledOnLoad` のコメントで、JavaScriptファイルをeager compilationをする仕組みをV8に実装している話。
JavaScriptは関数をコンパイルするにはファイルをパースをする必要があるため、コンパイルが必要かを判断するにも時間がかかってしまう。そのため、ファイルの先頭のコメントでコンパイルするべきかを判断できるようにするための仕組み
