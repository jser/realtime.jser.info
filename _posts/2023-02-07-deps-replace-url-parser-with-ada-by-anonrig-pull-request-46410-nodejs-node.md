---
title: >-
  deps: replace url parser with Ada by anonrig · Pull Request #46410 ·
  nodejs/node
author: azu
layout: post
itemUrl: 'https://github.com/nodejs/node/pull/46410'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/02/index.json'
date: '2023-02-07T11:37:43Z'
tags:
  - node.js
  - URL
  - issue
  - performance
relatedLinks:
  - title: >-
      deps: replace url parser with Ada by anonrig · Pull Request #46410 ·
      nodejs/node
    url: 'https://github.com/nodejs/node/pull/46410'
---
Node.jsの`URL`をada-urlというC++で実装したものに切り替える。
現在のURLの実装と比較してパフォーマンスが改善されている。
