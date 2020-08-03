---
title: Speculation in JavaScriptCore | WebKit
author: azu
layout: post
itemUrl: 'https://webkit.org/blog/10308/speculation-in-javascriptcore/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/08/index.json'
date: '2020-08-03T04:05:29Z'
tags:
  - JavaScript
  - JIT
  - webkit
---
Filip PizloによるJavaScriptCoreの投機的コンパイル、JITについて詳しい解説。
JavaScriptCoreにおける4層のコンパイル処理の解説、投機的コンパイル、再コンパイル、プロファイリング、インラインキャッシュなど。
投機的コンパイルは動的に型付けの言語においてどんな型を持っているかを推測して最適化する手法。その推測には、複数の実行層を使ったプロファイリングなどを基にして最適化を行う話
