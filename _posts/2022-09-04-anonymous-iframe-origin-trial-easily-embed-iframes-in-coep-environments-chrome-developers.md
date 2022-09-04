---
title: >-
  Anonymous iframe origin trial: Easily embed iframes in COEP environments -
  Chrome Developers
author: azu
layout: post
itemUrl: 'https://developer.chrome.com/blog/anonymous-iframe-origin-trial/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/09/index.json'
date: '2022-09-04T09:25:56Z'
tags:
  - browser
  - article
---
`Cross-Origin-Embedder-Policy: require-corp`と`Cross-Origin-Opener-Policy: same-origin`のレスポンスヘッダを返すサイトではないと、クロスオリジン分離してiframeとして埋め込めない。
この問題を解決するために、iframe要素に`anonymous`属性について
