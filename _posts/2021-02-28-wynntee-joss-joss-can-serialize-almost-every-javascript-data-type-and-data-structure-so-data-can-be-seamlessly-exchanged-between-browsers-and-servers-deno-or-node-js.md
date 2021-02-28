---
title: >-
  wynntee/joss: JOSS can serialize almost every JavaScript data type and data
  structure, so data can be seamlessly exchanged between browsers and servers
  (Deno or Node.js).
author: azu
layout: post
itemUrl: 'https://github.com/wynntee/joss'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/02/index.json'
date: '2021-02-28T13:40:47Z'
tags:
  - JavaScript
  - library
relatedLinks:
  - title: JS Open Serialization Scheme
    url: 'https://www.wynntee.com/projects/serialization/specification/index.html'
---
JOSSというJavaScriptオブジェクトのシリアライズ、デシアライズの仕様とそのリファレンス実装ライブラリ。
BigInt、循環参照、疎な配列、`-0`などJSONにはない部分もサポートしている。
ブラウザ、Node、Denoで動作する
