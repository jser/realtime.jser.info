---
title: 'bikeshaving/shovel: Run Service Workers anywhere'
author: azu
layout: post
itemUrl: 'https://github.com/bikeshaving/shovel'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/02/index.json'
date: '2026-02-15T04:21:52Z'
tags:
  - ServiceWorker
  - server
  - library
  - nodejs
  - Bun
  - cloudflare
---
Service Worker APIやWeb標準APIのインターフェースをベースにしたサーバアプリケーションを書けるメタフレームワーク。
Node.js/Bun/Cloudflare Workersなどで動作する。
Service Workerの`install`/`activate`/`fetch`イベントをベースにしたサーバライフサイクルを持つ。
Fetch API、Cache API、FileSystem API、CookieStore API、URLPatternなどのWeb標準APIをベースとしている。
