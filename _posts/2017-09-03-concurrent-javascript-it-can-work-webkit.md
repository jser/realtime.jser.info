---
title: 'Concurrent JavaScript: It can work! | WebKit'
author: azu
layout: post
itemUrl: 'https://webkit.org/blog/7846/concurrent-javascript-it-can-work/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/09/index.json'
date: '2017-09-03T23:15:20Z'
tags:
  - JavaScript
  - webkit
---
`SharedArrayBuffer`が追加されるため、JavaScriptでThreadをサポートした場合にどうなるのかという思考実験についての記事。
現在のJavaScript VMはシングルスレッドであることを利用しているので、マルチスレッドの場合のVMのパフォーマンスなどについて。
