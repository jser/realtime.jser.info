---
title: An in-depth guide to performance optimization with webpack - LogRocket Blog
author: azu
layout: post
itemUrl: 'https://blog.logrocket.com/guide-performance-optimization-webpack/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/05/index.json'
date: '2020-05-09T14:04:29Z'
tags:
  - webpack
  - performance
  - article
relatedLinks:
  - title: doppelmutzi/react-performance-strategies at manifest-splitting
    url: >-
      https://github.com/doppelmutzi/react-performance-strategies/tree/manifest-splitting
---
webpackでのbundleサイズの分析、改善方法についてのチュートリアル。
エントリポイントの分離、サードパーティライブラリの分離、chunkのグループ化、ルーティングごとのcode splitting、`runtimeChunk`でのmanifestファイルの統一。
externalsでのCDNの利用、Tree ShakingでDead Code削除、Performance Budgetの設定などをステップごとに見ていく記事
