---
title: Introducing the scheduler.yield origin trial - Chrome Developers
author: azu
layout: post
itemUrl: 'https://developer.chrome.com/en/blog/introducing-scheduler-yield-origin-trial/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/08/index.json'
date: '2023-08-31T11:57:44Z'
tags:
  - Chrome
  - JavaScript
  - article
---
Chrome 115で実験的に実装されている`scheduler.yield`について。
`setTimeout(..., 0)`はタスクキューの最後に追加するが、`scheduler.yield`はタスクキューの先頭に追加するという違いがあることについて
