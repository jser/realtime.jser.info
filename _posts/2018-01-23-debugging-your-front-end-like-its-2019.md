---
title: Debugging your front-end like it's 2019
author: azu
layout: post
itemUrl: 'http://krasimirtsonev.com/blog/article/debugging-your-front-end-like-is-2019'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/01/index.json'
date: '2018-01-23T02:40:28Z'
tags:
  - JavaScript
  - debug
  - Flux
  - redux
  - Angular
  - Chrome
  - Extension
relatedLinks:
  - title: 'krasimir/kuker: Kick-ass browser extension to debug your apps'
    url: 'https://github.com/krasimir/kuker'
---
kukerという開発者ツールについて。
redux-devtoolsのようにブラウザに拡張をインストールし、ReduxやReact、Angularなどライブラリのログを見ることができる。
ログを投げる側は`postMessage`を送ることで記録できる。
