---
title: 'High-performance Web Worker messages | Read the Tea Leaves'
author: azu
layout: post
itemUrl: 'http://nolanlawson.com/2016/02/29/high-performance-web-worker-messages/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2016/03/index.json'
date: '2016-03-06T02:46:09+00:00'
tags:
  - webworker
  - performance
  - JavaScript
relatedLinks:
  - title: How fast are web workers? ★ Mozilla Hacks – the Web developer blog
    url: 'https://hacks.mozilla.org/2015/07/how-fast-are-web-workers/'
  - title: 'Fast legoization | Better world by better software'
    url: 'https://glebbahmutov.com/blog/fast-legoization/'
---
単純なデータ転送についてのWeb Workerのパフォーマンステスト。
- `JSON.stringify()`/`JSON.parse()`の利用
- 一部のみ適応
- 生オブジェクトのまま
をそれぞれ比較したもの
