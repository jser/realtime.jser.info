---
title: >-
  BuilderIO/partytown: Relocate resource intensive third-party scripts off of
  the main thread and into a web worker. :tada:
author: azu
layout: post
itemUrl: 'https://github.com/BuilderIO/partytown'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/09/index.json'
date: '2021-09-27T13:04:10Z'
tags:
  - JavaScript
  - library
  - performance
relatedLinks:
  - title: >-
      Introducing Partytown :tada:: Run Third-Party Scripts From a Web Worker -
      DEV Community :woman:‍:computer::man:‍:computer:
    url: >-
      https://dev.to/adamdbradley/introducing-partytown-run-third-party-scripts-from-a-web-worker-2cnp
---
サードパーティスクリプトをWorker内で動かしてメインスレッドのブロッキングを防ぐライブラリ。
Worker内でのDOM操作をProxyして、同期XHRで通信し、その通信をService Workerでインターセプトしてメインスレッドと非同期でやり取りした結果をWorkerに返している。
