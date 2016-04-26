---
title: Node v6.0.0 (Current) | Node.js
author: azu
layout: post
itemUrl: 'https://nodejs.org/en/blog/release/v6.0.0/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2016/04/index.json'
date: '2016-04-26T22:53:22Z'
tags:
  - node.js
  - ReleaseNote
---
Node.js 6.0.0(LTS)リリース。
v8のアップデートを含むため、Native addonは`npm rebuid`での再ビルドが必要。
Buffer APIが新しくなり、古いAPIは非推奨へ、`worker.suicide`は`worker.exitedAfterDisconnect`に変更、`querystring.parse()`が返すオブジェクトは`Object.prototype`を継承しないようになるなど
