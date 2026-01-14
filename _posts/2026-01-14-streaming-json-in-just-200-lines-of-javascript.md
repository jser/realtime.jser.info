---
title: Streaming JSON in just 200 lines of JavaScript
author: azu
layout: post
itemUrl: >-
  https://krasimirtsonev.com/blog/article/streaming-json-in-just-200-lines-of-javascript
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/01/index.json'
date: '2026-01-14T14:30:31Z'
tags:
  - JavaScript
  - article
  - JSON
---
JSONをストリーミングする方法についての記事。
サーバー側で非同期データ（Promise）をプレースホルダーに変換し、NDJSON形式と`Transfer-Encoding: chunked`を使ってデータを段階的に送信する。
クライアント側ではFetch APIでストリームを読み込み、プレースホルダーを実データに置き換える実装について。
