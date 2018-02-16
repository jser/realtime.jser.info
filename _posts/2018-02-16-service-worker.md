---
title: Service Worker スクリプトのインストールと更新処理
author: azu
layout: post
itemUrl: 'http://nhiroki.jp/2018/02/15/service-worker-install-and-update-scripts'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/02/index.json'
date: '2018-02-16T16:21:33Z'
tags:
  - ServiceWorker
  - article
  - JavaScript
---
Service Workerスクリプトのインストール、更新確認のロジック、キャッシュについて。
`updateViaCache`でのキャッシュを利用するかの設定、24時間以上経過した場合は必ずサーバへ更新確認を行うことについてなど
