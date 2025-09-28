---
title: A year of improving Node.js compatibility in Cloudflare Workers
author: azu
layout: post
itemUrl: 'https://blog.cloudflare.com/nodejs-workers-2025/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2025/09/index.json'
date: '2025-09-28T12:01:39Z'
tags:
  - nodejs
  - cloudflare
  - article
relatedLinks:
  - title: >-
      nodejs/ncrypto: Library supporting OpenSSL and crypto functions for
      node:crypto
    url: 'https://github.com/nodejs/ncrypto'
---
Cloudflare WorkersでのNode.js互換性の取り組みについて。
`nodejs_compat`フラグで`node:http`/`node:fs`/`node:crypto`/`node:process`などの主要モジュールをサポート。
Virtual File Systemの実装やNode.jsのcryptoの処理を`ncrypto`パッケージに移行し、BoringSSLベースで`node:crypto`に対応など
