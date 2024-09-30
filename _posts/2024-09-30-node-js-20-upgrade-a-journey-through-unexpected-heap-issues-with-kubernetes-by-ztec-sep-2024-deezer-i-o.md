---
title: >-
  Node.js 20 upgrade: a journey through unexpected HEAP issues with Kubernetes |
  by Ztec | Sep, 2024 | Deezer I/O
author: azu
layout: post
itemUrl: >-
  https://deezer.io/node-js-20-upgrade-a-journey-through-unexpected-heap-issues-with-kubernetes-27ae3d325646
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/09/index.json'
date: '2024-09-30T14:37:59Z'
tags:
  - nodejs
  - article
---
Node.js 18から20へアップデートすると平均応答時間やCPUの使用率がわずかに増加し、その原因を探索していく記事。
HeapとGCのメトリクスを見ていくと、GCが頻繁に起きるようになっており、リリースノートを探すとV8のHeapスペースのデフォルト値が変更されていることを発見するまでの話
