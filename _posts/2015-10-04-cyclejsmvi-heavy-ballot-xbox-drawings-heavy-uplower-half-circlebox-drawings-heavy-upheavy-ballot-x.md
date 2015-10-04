---
title: エディタの実装をcycle.jsでMVIベースにしてみた話 - ✘╹◡╹✘
author: azu
layout: post
itemUrl: 'http://r7kamura.hatenablog.com/entry/2015/10/04/062333'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2015/10/index.json'
date: '2015-10-04T14:22:53+00:00'
tags:
  - JavaScript
  - Rx
  - 設計
---
cycle.jsのアーキテクチャについて。
「イベントソースを受け取ってイベントソースを返す関数」がどのように使われてるのか、MVIとはどういう責務での分離なのかについて。
