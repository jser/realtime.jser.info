---
title: Node.js and the struggles of being an EventTarget
author: azu
layout: post
itemUrl: >-
  https://www.nearform.com/blog/node-js-and-the-struggles-of-being-an-eventtarget/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/08/index.json'
date: '2020-08-17T12:32:48Z'
tags:
  - node.js
  - article
---
Node.jsに`EventTarget`がなぜ実装されたのかについて。
Node.jsにFethやAbortControllerなどのウェブ標準のAPIを実装するためにブラウザと互換性のある`EventTarget` APIが必要である点について。
`EventTarget`を実装するにあたっての互換性、複数継承、パフォーマンスの問題をどう解決したかについて
