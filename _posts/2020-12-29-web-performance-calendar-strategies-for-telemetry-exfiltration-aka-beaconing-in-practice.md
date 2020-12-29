---
title: >-
  Web Performance Calendar » Strategies for Telemetry Exfiltration (aka
  Beaconing In Practice)
author: azu
layout: post
itemUrl: 'https://calendar.perfplanet.com/2020/beaconing-in-practice/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/12/index.json'
date: '2020-12-29T02:24:04Z'
tags:
  - article
  - browser
  - WebPlatformAPI
---
ブラウザからメトリクスデータを送信するときの戦略について。
`navigator.sendBeacon`/Fetch/XHR/pixel imageでの送信、どのタイミングで送信するかのライフサイクルイベントの到達信頼性についての調査。
ローカルストレージでの再送やService Workerでのバッファ、Reporting APIについてなど。

