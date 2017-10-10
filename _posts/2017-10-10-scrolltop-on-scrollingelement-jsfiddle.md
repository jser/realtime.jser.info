---
title: scrollTop on scrollingElement - JSFiddle
author: azu
layout: post
itemUrl: 'https://jsfiddle.net/xvrdaacf/3/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/10/index.json'
date: '2017-10-10T00:49:22Z'
tags:
  - Chrome
  - DOM
  - example
relatedLinks:
  - title: Dev.Opera — Fixing the scrollTop bug
    url: 'https://dev.opera.com/articles/fixing-the-scrolltop-bug/'
  - title: 新しいChromeでスクロールが取れない? scrollingElement? | Ginpen.com
    url: 'https://ginpen.com/2017/10/06/chrome-61-scrolltop/'
  - title: Document.scrollingElement - Web APIs | MDN
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document/scrollingElement'
---
Chrome 61+からは"ScrollTopLeftInterop"がデフォルトで有効化されたため、`scrollingElement`を使って`scrollTop`を取る必要がある。
`scrollingElement`のサンプルコード
