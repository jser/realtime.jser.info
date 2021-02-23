---
title: >-
  7.13.0 Released: Records and Tuples, granular compiler assumptions, and
  top-level targets · Babel
author: azu
layout: post
itemUrl: 'https://babeljs.io/blog/2021/02/22/7.13.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/02/index.json'
date: '2021-02-23T04:19:31Z'
tags:
  - babel
  - ReleaseNote
---
Babel 7.13.0リリース。
`targets`の設定をTop-Levelに書くことで各プラグインがその設定を利用するように、仕様のエッジケースを無視してより小さなコードを出力する`assumptions`オプションの追加。
ES Proposal Stage 2のRecordsとTuplesのサポート、Flowの`this`パラメータのサポート、TypeScript 4.2のサポートなど。
また、`@babel/runtime`がNode.jsの`exports`フィールドに対応するなど
