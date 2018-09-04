---
title: Array.prototype.sort について | メモログ
author: azu
layout: post
itemUrl: 'https://memolog.org/2018/about-array-prototype-sort.html'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/09/index.json'
date: '2018-09-04T01:52:46Z'
tags:
  - JavaScript
  - V8
  - article
relatedLinks:
  - title: >-
      Mathias Bynens on Twitter: &quot;Array.prototype.sort is now stable in
      @v8js v7.0 / Chrome 70! :tada: Previously, V8 used an unstable QuickSort
      for arrays with more than 10 elements. Now, we use the stable TimSort
      algorithm. Demo: https://t.co/X3Y1psd7IM... https://t.co/LhPEE15hA0&quot;
    url: 'https://twitter.com/mathias/status/1036626116654637057'
---
各ブラウザのJavaScriptエンジンのsotの実装について。 仕様では安定ソートを保証しないが、大体が安定ソートになっていっている。
V8はV8 7.0/Chrome 70でTimesortになる。
