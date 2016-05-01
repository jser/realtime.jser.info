---
title: >-
  Chromium Blog: Chrome 51 Beta: Credential Management API and reducing the
  overhead of offscreen rendering
author: azu
layout: post
itemUrl: 'http://blog.chromium.org/2016/04/chrome-51-beta-credential-management.html'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2016/05/index.json'
date: '2016-05-01T02:32:25Z'
tags:
  - Chrome
  - ReleaseNote
relatedLinks:
  - title: 'V8 JavaScript Engine: V8 Release 5.1'
    url: 'http://v8project.blogspot.jp/2016/04/v8-release-51.html'
  - title: IntersectionObserver/explainer.md at gh-pages · WICG/IntersectionObserver
    url: 'https://github.com/WICG/IntersectionObserver/blob/gh-pages/explainer.md'
  - title: Throttling Blink's rendering pipeline for hidden content
    url: >-
      https://docs.google.com/document/d/1Dd4qi1b_iX-OCZpelvXxizjq6dDJ76XNtk37SZEoTYQ/pub
  - title: Power usage impact of render pipeline throttling - Google ドキュメント
    url: >-
      https://docs.google.com/document/d/1jMuvRYWptZfP5zpvWmPJPRL-iowtgBVX45rSvew0VH4/edit
---
Chrome 51 Betaリリース。
Credential Management APIのサポート。
offscreenの場合、crosss originのframeにおいては`requestAnimationFrame()`が呼ばれないように、Intersection Observer 、`passive`イベントオプション、V8 5.1へのアップデートなど。
