---
title: 'N-API: Next generation Node.js APIs for native modules'
author: azu
layout: post
itemUrl: >-
  https://medium.com/@nodejs/n-api-next-generation-node-js-apis-for-native-modules-169af5235b06
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/06/index.json'
date: '2017-06-05T04:08:57Z'
tags:
  - C++
  - ChakraCore
  - V8
  - node.js
---
Node.js 8.0.0で導入されたN-APIについて。 いままでネイティブモジュールを書く際にNANなどもあったが、それはV8に依存していたためAPI/ABI stabilityに問題があった。 N-APIではABI-stableな中間レイヤーを入れる。これによりNode-ChacraCoreなどでも互換APIが整備されている
