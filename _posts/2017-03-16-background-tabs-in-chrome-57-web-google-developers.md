---
title: Background Tabs in Chrome 57  |  Web  |  Google Developers
author: azu
layout: post
itemUrl: 'https://developers.google.com/web/updates/2017/03/background_tabs'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/03/index.json'
date: '2017-03-16T12:55:53Z'
tags:
  - Chrome
---
Chromeのバックグラウンドタブにおける制限について。 
Chrome 57からは、timerやrequestAnimationFrameに加えて、budget-basedの制限が加わる。
バックグラウンドにいるかはPage visibility APIで判定できる。 テスト時などは`--disable-background-timer-throttling`のフラグで無効化できる。
