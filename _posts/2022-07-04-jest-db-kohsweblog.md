---
title: jestでDBありのテストを高速化する | kohsweblog
author: azu
layout: post
itemUrl: 'https://blog.koh.dev/2022-07-02-jest-speedup/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/07/index.json'
date: '2022-07-04T12:30:36Z'
tags:
  - JavaScript
  - testing
  - performance
  - article
---
Jestで実行するテストのパフォーマンス改善についての記事。
ローカルではmaxWorkers、CIはshardを使いテストを並列に実行することで、実行時間を短くする方法について
