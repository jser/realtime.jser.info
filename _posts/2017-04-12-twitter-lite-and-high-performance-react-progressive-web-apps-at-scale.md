---
title: Twitter Lite and High Performance React Progressive Web Apps at Scale
author: azu
layout: post
itemUrl: >-
  https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/04/index.json'
date: '2017-04-12T12:19:20Z'
tags:
  - webpack
  - React
  - performance
  - redux
---
webpackのCommonsChunkPluginを使った分割、jankのない無限スクロールの実装。
Reactにおいては`shouldComponentUpdate`での最適化、`componentWillMount`から`componentDidMount`への処理の移動。
`dangerouslySetInnerHTML`を避ける、遅延描画など。
Reduxにおいては、テキスト入力毎のStoreの更新を避ける、Batch Actionでの最適化など。
SWでのロードキャッシュについてなど実践的な最適化手法について書かれている。
