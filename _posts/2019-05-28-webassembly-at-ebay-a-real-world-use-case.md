---
title: 'WebAssembly at eBay: A Real-World Use Case'
author: azu
layout: post
itemUrl: >-
  https://www.ebayinc.com/stories/blogs/tech/webassembly-at-ebay-a-real-world-use-case/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/05/index.json'
date: '2019-05-28T00:36:03Z'
tags:
  - WebAssembly
  - JavaScript
  - article
---
WebAssemblyのユースケースとしてバーコードリーダを実装した話。
C++からemscriptenでコンパイルしたwasmを使うことで、JavaScriptの実装よりもFPSが上がった。
しかし、カメラの特性により認識率がいまいち上がらず、C++の実装2つとJavaScriptの実装を組み合わせて利用した話
