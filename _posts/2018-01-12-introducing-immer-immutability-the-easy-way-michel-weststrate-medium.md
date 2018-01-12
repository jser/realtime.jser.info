---
title: 'Introducing Immer: Immutability the easy way – Michel Weststrate – Medium'
author: azu
layout: post
itemUrl: >-
  https://medium.com/@mweststrate/introducing-immer-immutability-the-easy-way-9d73d8f71cb3
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/01/index.json'
date: '2018-01-12T03:20:57Z'
tags:
  - JavaScript
  - library
  - article
relatedLinks:
  - title: >-
      Simplify Creating Immutable Data Trees With Immer from @mweststrate on
      @eggheadio
    url: >-
      https://egghead.io/lessons/redux-simplify-creating-immutable-data-trees-with-immer
---
Immmutableにオブジェクトを更新する`immer`について。
Proxyなどを使い実際に変更された場合にのみ、オブジェクト自身を更新する仕組みをもち、また開発中は自動で`Object.freeze`を適応する
ReduxのReducerのようなパターンをMutableなAPIで書ける。
