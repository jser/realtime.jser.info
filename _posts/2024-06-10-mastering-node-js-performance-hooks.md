---
title: Mastering Node.js Performance Hooks
author: azu
layout: post
itemUrl: 'https://pavel-romanov.com/nodejs-performance-hooks-mastering-the-mental-model'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/06/index.json'
date: '2024-06-10T15:10:31Z'
tags:
  - nodejs
  - performance
  - article
---
ユーザーの端末の影響を受けるwall clockとパフォーマンスの計測に適したmonotonic clockについて。
Node.jsの`perf_hooks`モジュールで利用できる`PerformanceObserver`では monotonic clockの時間を取得でき、基本的な使い方についてなど
