---
title: Meet Declarative Web Push | WebKit
author: azu
layout: post
itemUrl: 'https://webkit.org/blog/16535/meet-declarative-web-push/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2025/04/index.json'
date: '2025-04-06T07:46:19Z'
tags:
  - safari
  - article
relatedLinks:
  - title: explainers/DeclarativeWebPush at main · WebKit/explainers
    url: 'https://github.com/WebKit/explainers/tree/main/DeclarativeWebPush'
---
Safari 18.4でサポートされたDeclarative Web Pushについて。
SafariはITP対応のために、一定時間アクセスがないService Worker(SW)も削除していたが、Web PushはSWに依存していたためプッシュを使えないケースがあった。
Declarative Web PushはService Workerを利用せずにプッシュ通知を管理できる
