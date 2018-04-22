---
title: DasSur.ma – Layers and how to force them
author: azu
layout: post
itemUrl: 'http://dassur.ma/things/forcing-layers/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/04/index.json'
date: '2018-04-22T04:27:00Z'
tags:
  - CSS
  - performance
  - article
---
要素をレイヤー化する方法として`will-change: transform`がある。
しかし、実際にtransformしていないならば`will-change: opacity`や`backface-visibility: hidden`を使ったほうが良いという話。
`backface-visibility`の動作についての解説
