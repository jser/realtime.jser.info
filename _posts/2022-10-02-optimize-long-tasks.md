---
title: Optimize long tasks
author: azu
layout: post
itemUrl: 'https://web.dev/optimize-long-tasks/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/10/index.json'
date: '2022-10-02T16:01:35Z'
tags:
  - JavaScript
  - browser
  - performance
  - article
---
50ms以上かかるlong tasksを分解し、ユーザーの入力を表示を妨げないように最適化する方法についての記事。
タスクの分解と`navigator.scheduling.isInputPending()`での実行タイミングの判定、`schedulerpostTask` APIについて
