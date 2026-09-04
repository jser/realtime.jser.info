---
title: How Turbopack chunks your JavaScript | Next.js
author: azu
layout: post
itemUrl: 'https://nextjs.org/blog/turbopack-chunking'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/09/index.json'
date: '2026-09-04T01:58:41Z'
tags:
  - Next.js
  - JavaScript
  - article
  - performance
---
TurbopackのChunk分割アルゴリズムについて。
Chunkのマージによるリクエスト数と転送量のトレードオフについて解説されている。
Next.js 16.3の`generateComponentChunks`では、ビルド時にはChunk GroupとChunkを生成する。Runtimeでナビゲーション時に生成されたChunk GroupとChunkどちらか効率的かを判断してロードしている。
また`firstPageLoadPriority`/`priorityRoutes`/`clusters`による調整やCommonJSの対応についてなど。
