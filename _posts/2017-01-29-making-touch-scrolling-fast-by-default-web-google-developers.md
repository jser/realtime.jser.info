---
title: Making touch scrolling fast by default  |  Web  |  Google Developers
author: azu
layout: post
itemUrl: 'https://developers.google.com/web/updates/2017/01/scrolling-intervention'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/01/index.json'
date: '2017-01-29T11:07:17Z'
tags:
  - Chrome
  - JavaScript
  - event
relatedLinks:
  - title: Event.defaultPrevented - Web APIs | MDN
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Event/defaultPrevented'
  - title: Chrome Platform Status
    url: 'https://www.chromestatus.com/features/5093566007214080'
---
Chrome 56からtouch eventをlistenすると
`{passive: true}`がデフォルトとなる。
デフォルトでは`touchstart`の中で`event.preventDefault()`を呼ぶと無視され警告がコンソールに表示される。
