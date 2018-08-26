---
title: Service Worker Caching Strategies Based on Request Types
author: azu
layout: post
itemUrl: >-
  https://medium.com/dev-channel/service-worker-caching-strategies-based-on-request-types-57411dd7652c
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/08/index.json'
date: '2018-08-26T03:19:55Z'
tags:
  - ServiceWorker
  - article
  - Fetch
---
どの種類に対するリクエスト化を判定できる`Request.destination`について。
`Request.destination`を使いキャッシュの戦略を変えるという話。また注意点として、一部リクエストは空文字列となり判定できないという話。
`Request.mode`や`Request.url`などとの組み合わせについて
