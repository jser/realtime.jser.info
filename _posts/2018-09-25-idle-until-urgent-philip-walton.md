---
title: Idle Until Urgent — Philip Walton
author: azu
layout: post
itemUrl: 'https://philipwalton.com/articles/idle-until-urgent/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/09/index.json'
date: '2018-09-25T00:16:09Z'
tags:
  - JavaScript
  - performance
  - article
relatedLinks:
  - title: >-
      GoogleChromeLabs/idlize: Helper classes and methods for implementing the
      idle-until-urgent pattern
    url: 'https://github.com/GoogleChromeLabs/idlize'
---
すぐに実行するとコストが高いものを`requestIdleCallback`を使い遅延実行することでfirst input delay (FID)を改善するという話。
それらのパターンをまとめたidliveというライブラリの使い方やユースケースについて
