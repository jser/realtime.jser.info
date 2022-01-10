---
title: >-
  Introducing fuite: a tool for finding memory leaks in web apps | Read the Tea
  Leaves
author: azu
layout: post
itemUrl: >-
  https://nolanlawson.com/2021/12/17/introducing-fuite-a-tool-for-finding-memory-leaks-in-web-apps/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/01/index.json'
date: '2022-01-10T13:34:34Z'
tags:
  - browser
  - debug
  - article
  - Tools
relatedLinks:
  - title: 'nolanlawson/fuite: A tool for finding memory leaks in web apps'
    url: 'https://github.com/nolanlawson/fuite'
  - title: Fixing memory leaks in web applications | Read the Tea Leaves
    url: >-
      https://nolanlawson.com/2020/02/19/fixing-memory-leaks-in-web-applications/
  - title: Debugging a memory leak with fuite - YouTube
    url: 'https://www.youtube.com/watch?v=H0BHL2lo89M'
---
fuiteというメモリリークのデバッグツールについて。
Puppeteerを使ってシナリオベースの操作をし、指定回数繰り返した結果のメモリリークを確認できる。
実行時にBreak Pointを貼ってブラウザの処理を止め、Chrome DevToolsと接続して開発者ツールによってデバッグができる。
