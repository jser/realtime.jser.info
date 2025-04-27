---
title: >-
  Nom-nom-hub/flash-install: A fast, drop-in replacement for npm install,
  focused on drastically speeding up Node.js dependency installation through
  deterministic caching, parallel operations, and .flashpack archive
  snapshotting.
author: azu
layout: post
itemUrl: 'https://github.com/Nom-nom-hub/flash-install'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2025/04/index.json'
date: '2025-04-27T01:35:36Z'
tags:
  - npm
  - console
  - Tools
---
キャッシュとスナップショットをサポートしたnpmパッケージのインストールを行うツール。
ハッシュベースのパスとhard linkを使ったキャッシュ、`.flashpack`というスナップショットファイルを扱うことができブランチ切り替え時の復元が高速に行える。
