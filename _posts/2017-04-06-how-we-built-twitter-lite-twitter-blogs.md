---
title: How we built Twitter Lite | Twitter Blogs
author: azu
layout: post
itemUrl: 'https://blog.twitter.com/2017/how-we-built-twitter-lite'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/04/index.json'
date: '2017-04-06T12:44:22Z'
tags:
  - twitter
  - mobile
  - React
---
Twitter Liteの技術スタックについて。
React, Redux, Normalizr, Globalize, Babel, Webpack, Jest, WebdriverIOなどを使っている。
パフォーマンスのためにPRPLパターンを使い、`requestAnimationFrame`や`requestIdleCallback`を使ってのレンダリングの調整などについて
