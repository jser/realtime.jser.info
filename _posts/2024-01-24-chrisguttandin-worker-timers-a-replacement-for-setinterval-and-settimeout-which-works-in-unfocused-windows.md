---
title: >-
  chrisguttandin/worker-timers: A replacement for setInterval() and setTimeout()
  which works in unfocused windows.
author: azu
layout: post
itemUrl: 'https://github.com/chrisguttandin/worker-timers'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/01/index.json'
date: '2024-01-24T12:16:03Z'
tags:
  - browser
  - webworker
  - JavaScript
  - library
---
ブラウザはタブがアクティブではない場合、intervalとtimeoutの最小値を強制的に変更する。
Web Workerではこの制限がないことを利用して、制限のない`setTimeout`と`setInterval`を提供するライブラリ
