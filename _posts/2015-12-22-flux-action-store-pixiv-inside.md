---
title: FluxのActionとStoreをちゃんと分ける話 - pixiv inside
author: azu
layout: post
itemUrl: 'http://inside.pixiv.net/entry/2015/12/19/113746'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2015/12/index.json'
date: '2015-12-22T11:57:28+00:00'
tags:
  - Flux
  - JavaScript
---
Actionでデータを構築し、StoreへDispatchする。
またDispatchするデータは`Entity`にすることで、役割を分けるという話
