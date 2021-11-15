---
title: SharedArrayBuffer と過渡期な cross-origin isolation の話
author: azu
layout: post
itemUrl: 'https://blog.agektmr.com/2021/11/cross-origin-isolation.html'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/11/index.json'
date: '2021-11-15T14:02:46Z'
tags:
  - browser
  - Chrome
  - article
---
`SharedArrayBuffer`や高分解能Timerを利用するためにはcross origin isolationな状態が必要となる。
cross origin isolationな状態にするための条件であるHTTPヘッダについての解説。
