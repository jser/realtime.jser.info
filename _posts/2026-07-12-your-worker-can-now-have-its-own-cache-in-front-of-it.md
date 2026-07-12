---
title: Your Worker can now have its own cache in front of it
author: azu
layout: post
itemUrl: 'https://blog.cloudflare.com/workers-cache/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/07/index.json'
date: '2026-07-12T12:39:01Z'
tags:
  - cloudflare
  - JavaScript
  - article
---
Cloudflare Workers Cacheについて。
Workerの前段にキャッシュを置き、`wrangler.jsonc`の`cache.enabled`で有効化できる。
`Cache-Control`/`Vary`に対応し、`ctx.cache.purge()`でタグやパスによる削除ができる。
