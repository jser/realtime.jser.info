---
title: Introducing a faster BBC News front page | Wildly Inaccurate
author: azu
layout: post
itemUrl: 'https://wildlyinaccurate.com/introducing-a-faster-bbc-news-front-page'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/04/index.json'
date: '2017-04-24T17:19:53Z'
tags:
  - browser
  - performance
  - React
  - opinion
---
BBC Newsのパフォーマンス改善について。
SpeedCurveを使って計測を行い、画像遅延ロード、Reactをサーバサイドレンダリングのみに利用してる。
まだ改善の1段階で、Reactをブラウザ側で動かしたときにモバイルだと重たい問題などが課題となってる(そのためサーバサイドレンダリングのみになっている)
