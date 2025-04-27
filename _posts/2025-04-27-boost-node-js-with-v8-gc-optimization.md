---
title: Boost Node.js with V8 GC Optimization
author: azu
layout: post
itemUrl: >-
  https://blog.platformatic.dev/optimizing-nodejs-performance-v8-memory-management-and-gc-tuning
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2025/04/index.json'
date: '2025-04-27T01:46:31Z'
tags:
  - nodejs
  - V8
  - article
  - performance
---
V8の世代別GCは、Scavengeという高速なGCをsemi-spaceのオブジェクトに行い、何回か生き残ったオブジェクトを昇格し、GCの頻度が少ないspaceに移動させる。
間違って昇格したオブジェクトが多いとなかなかメモリから解放されないため、このsemi-spaceのサイズを調整するオプションやメモリチューニングの方法についてなど

