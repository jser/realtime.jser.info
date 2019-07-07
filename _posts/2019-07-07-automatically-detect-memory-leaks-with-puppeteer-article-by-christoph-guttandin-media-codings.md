---
title: >-
  Automatically detect memory leaks with Puppeteer - Article by Christoph
  Guttandin - Media Codings
author: azu
layout: post
itemUrl: >-
  https://media-codings.com/articles/automatically-detect-memory-leaks-with-puppeteer
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/07/index.json'
date: '2019-07-07T14:20:13Z'
tags:
  - JavaScript
  - browser
  - testing
relatedLinks:
  - title: 'page.evaluateHandle(pageFunction[, ...args])'
    url: >-
      https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pageevaluatehandlepagefunction-args
  - title: page.queryObjects(prototypeHandle)
    url: >-
      https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagequeryobjectsprototypehandle
  - title: >-
      standardized-audio-context/memory.js at master ·
      chrisguttandin/standardized-audio-context
    url: >-
      https://github.com/chrisguttandin/standardized-audio-context/blob/master/test/integration/memory.js
---
Puppeteerを使ってウェブページのメモリリークテストを書く方法について。
`page.queryObjects`を使って処理前後のHeapにあるオブジェクトの数を比較することでテストする方法について
