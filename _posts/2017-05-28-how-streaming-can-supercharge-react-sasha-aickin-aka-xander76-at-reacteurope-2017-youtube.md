---
title: >-
  How Streaming Can Supercharge React - Sasha Aickin aka @xander76 at
  ReactEurope 2017 - YouTube
author: azu
layout: post
itemUrl: 'https://www.youtube.com/watch?v=UhdGiVy3_Nk'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/05/index.json'
date: '2017-05-28T14:10:29Z'
tags:
  - React
  - server
  - video
  - performance
relatedLinks:
  - title: 'deepanjanroy/tti-polyfill: Polyfill for Time to Interactive'
    url: 'https://github.com/deepanjanroy/tti-polyfill'
  - title: HTTP2 を前提とした HTML+CSS コンポーネントのレンダリングパス最適化について | blog.jxck.io
    url: 'https://blog.jxck.io/entries/2016-02-15/loading-css-over-http2.html'
  - title: >-
      Add package builds for new server renderer and enable tests by sebmarkbage
      · Pull Request #9710 · facebook/react
    url: 'https://github.com/facebook/react/pull/9710'
---
Reactとサーバサイドレンダリングについての発表動画。
SSRには表示を早くするメリットがあるがTTIは長くなる問題がある。
これを解決するために、一定のブロックでコンポーネントをプログレッシブにレンダリングすることでTTIを改善する案について。
また、Reactに`ReactDOMServerStream`が追加されたことについて。
