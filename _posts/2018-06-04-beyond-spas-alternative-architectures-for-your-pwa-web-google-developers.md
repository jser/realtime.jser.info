---
title: >-
  Beyond SPAs: alternative architectures for your PWA  |  Web  |  Google
  Developers
author: azu
layout: post
itemUrl: 'https://developers.google.com/web/updates/2018/05/beyond-spa'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/06/index.json'
date: '2018-06-04T15:21:21Z'
tags:
  - server
  - ServiceWorker
  - article
  - JavaScript
relatedLinks:
  - title: >-
      GoogleChromeLabs/so-pwa: A progressive web app to read Stack Overflow
      content.
    url: 'https://github.com/GoogleChromeLabs/so-pwa'
---
Service WorkerとExpressを使ったページ単位の(SPAではない)ウェブアプリのためのアーキテクチャと実装サンプルについて。
ルーティングをクライアントとサーバで共有し、パーシャルなViewをStream APIで取得しレンダリングする。また動的なメタ情報の渡し方についてなど
