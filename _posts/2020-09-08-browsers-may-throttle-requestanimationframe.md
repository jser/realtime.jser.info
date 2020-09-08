---
title: Browsers may throttle requestAnimationFrame
author: azu
layout: post
itemUrl: >-
  https://mattperry.is/writing-code/browsers-may-throttle-requestanimationframe-to-30fps
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/09/index.json'
date: '2020-09-08T03:21:02Z'
tags:
  - JavaScript
  - animation
  - article
---
`requestAnimationFrame`のフレームレートがブラウザによって抑制される条件について。
iOSのlow-power mode、Safariのcross-origin iframesの条件下では抑制される点について。
また、Firefoxにおいて`performance.now()`の精度の抑制されていることとcross-origin isolateについて。
