---
title: Speculation Rules API によるプリレンダリングのためのメトリクス設計
author: azu
layout: post
itemUrl: 'https://nhiroki.jp/2023/02/13/metrics-for-prerendering'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/02/index.json'
date: '2023-02-15T03:53:21Z'
tags:
  - Chrome
  - performance
  - article
---
Speculation Rules APIのPreRenderingについて。
Prerenderした場合の`navigationStart`は事前実行のタイミングとなるため、`activationStart`というメトリクスが追加された点。
また、Predenderが実際に利用されているかの判定方法について
