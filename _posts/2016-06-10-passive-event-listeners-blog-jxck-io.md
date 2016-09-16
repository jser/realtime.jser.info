---
title: Passive Event Listeners によるスクロールの改善 | blog.jxck.io
author: azu
layout: post
itemUrl: 'https://blog.jxck.io/entries/2016-06-09/passive-event-listeners.html'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2016/06/index.json'
date: '2016-06-10T10:18:47Z'
tags:
  - JavaScript
  - performance
relatedLinks:
  - title: addEventListener()の第3引数の意味とかをちゃんと理解する為のメモ - 今日もスミマセン。
    url: 'http://d.hatena.ne.jp/snaka72/20100925/1285404467'
  - title: >-
      Add feature test for passive event listener support · Issue #1894 ·
      Modernizr/Modernizr
    url: 'https://github.com/Modernizr/Modernizr/issues/1894'
---
`addEventListener(type, handler, options)`の第三引数として追加されてた `passive`オプションについて。
`passive: true` とした場合の効果、Feature detectの方法についてなど
