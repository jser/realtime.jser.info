---
title: Faster apps with JSON.parse (Chrome Dev Summit 2019) - YouTube
author: azu
layout: post
itemUrl: 'https://www.youtube.com/watch?v=ff4fgQxPaO0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/11/index.json'
date: '2019-11-24T02:03:54Z'
tags:
  - JavaScript
  - JSON
  - performance
  - video
relatedLinks:
  - title: The cost of JavaScript in 2019 · V8
    url: 'https://v8.dev/blog/cost-of-javascript-2019#json'
---
オブジェクトリテラルより`JSON.parse`した方が、パフォーマンスが良い理由についての解説動画。
JSONには出現するトークンが限定されているためオブジェクトリテラルよりパースが高速にできること、SSRでのユースケースなどについて紹介している。
10kB以上など大きなデータに関しては`JSON.parse`を使うことを推奨している
