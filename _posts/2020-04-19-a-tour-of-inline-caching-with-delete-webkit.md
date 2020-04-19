---
title: A Tour of Inline Caching with Delete | WebKit
author: azu
layout: post
itemUrl: 'https://webkit.org/blog/10298/inline-caching-delete/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/04/index.json'
date: '2020-04-19T12:43:32Z'
tags:
  - webkit
  - performance
  - article
  - JavaScript
---
`delete`演算子でプロパティを削除するオブジェクトの構造が変わって構造IDが変わることで、構造IDをkeyにしてキャッシュするInline Cachingが無効化されて遅くなる問題について。
JSCではこのdeleteによる削除遷移に対する最適化を行うことで、Emberのデバッグビルドのようなdeleteを多用するアプリでのパフォーマンスを改善したという話
