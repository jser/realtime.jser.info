---
title: Architecture of an early stage SAAS | Feelback Blog
author: azu
layout: post
itemUrl: 'https://www.feelback.dev/blog/feelback-saas-launch-architecture/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/07/index.json'
date: '2023-07-04T02:34:58Z'
tags:
  - webservice
  - article
  - node.js
relatedLinks:
  - title: 'httpc: function-based API made easy'
    url: 'https://httpc.dev/'
---
fly.io と Node.jsを使ったSaaSのアーキテクチャ解説。
fly.ioを使った低コストなインフラの構成。
クライアントとサーバどちらもNode.jsで、型付きRPCとしてhttpcを利用。
管理画面はCloudflare Pagesにありhttpcを使って通信、ホームページやドキュメントにはAstroを利用している。
また、利用している外部サービスやmonorepoの構造についてなど
