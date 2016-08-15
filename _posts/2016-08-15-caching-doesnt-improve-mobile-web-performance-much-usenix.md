---
title: Caching Doesn't Improve Mobile Web Performance (Much) | USENIX
author: azu
layout: post
itemUrl: 'https://www.usenix.org/node/196205'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2016/08/index.json'
date: '2016-08-15T01:01:29Z'
tags:
  - mobile
  - performance
  - 論文
---
モバイルではキャッシュによるページロード時間の改善効果が小さいというPaper。
元々のロード時間がnetwork delay + computational delayである場合に、モバイルではCPUの性能によりcomputational delayの占める割合が多くなるため。
