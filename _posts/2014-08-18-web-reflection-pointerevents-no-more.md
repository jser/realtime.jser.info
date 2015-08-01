---
title: 'Web Reflection: PointerEvents No More'
author: azu
layout: post
itemUrl: 'http://webreflection.blogspot.com/2014/08/pointerevents-no-more.html'
date: '2014-08-18T06:03:06.596Z'
tags:
  - Chrome
  - event
relatedLinks:
  - title: Issue 162757 - chromium - Implement pointer events in Chrome behind experimental flag - An open-source project to help move the web forward. - Google Project Hosting
    url: 'https://code.google.com/p/chromium/issues/detail?id=162757#c64'
  - title: 'PSA: PointerEvents and PointerGestures are being replaced by polymer-gestures, breaking changes for pointer* events - Google グループ'
    url: 'https://groups.google.com/forum/#!topic/polymer-dev/ba4aDyOozm8'
---
BlinkはPointerEventsを実装しないことにした。
- touch eventsが既にある
- hit-testモデルがパフォーマンス的に不利
- 複雑すぎる

