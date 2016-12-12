---
title: Performance Calendar » Prefer DEFER Over ASYNC
author: azu
layout: post
itemUrl: 'http://calendar.perfplanet.com/2016/prefer-defer-over-async/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2016/12/index.json'
date: '2016-12-12T22:53:13Z'
tags:
  - JavaScript
  - browser
  - performance
---
deferとasync属性について。 どちらもHTMLパースのブロックはしないが、レンダリングのブロックは発生する。 
deferは常にdomInteractiveが起きてから実行するため一定、しかしasyncはダウンロード速度によってはメインと被ることもある。
メインコンテンツに関係ないレンダリングを行うスクリプトはdefer属性を試すことで、メインのレンダリングが邪魔されずに進むかを確認した方が良いという話。
