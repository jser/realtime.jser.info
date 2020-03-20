---
title: Node.jsでUnhandled RejectionsのときにExit Statusが0となる問題を回避する | Web Scratch
author: azu
layout: post
itemUrl: 'https://efcl.info/2020/03/20/node-unhandled-rejections-exit-status/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/03/index.json'
date: '2020-03-20T10:25:04Z'
tags:
  - node.js
  - JavaScript
  - article
---
Node.jsでのUnhandled Rejectionsの問題について。
意図しない正常終了を避ける方法としてのエラーハンドリング、`unhandledRejection`イベント、`--unhandled-rejections`オプションについて
