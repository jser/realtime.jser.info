---
title: >-
  Node.js compatibility for Cloudflare Workers – starting with Async Context
  Tracking, EventEmitter, Buffer, assert, and util
author: azu
layout: post
itemUrl: 'https://blog.cloudflare.com/workers-node-js-asynclocalstorage/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/03/index.json'
date: '2023-03-27T15:26:54Z'
tags:
  - cloudflare
  - node.js
  - article
---
Cloudflare WorkersにNode.jsのCore Modulesの一部が実装されたという話。
`nodejs_compat`というフラグが有効な場合に、AsyncLocalStorage/EventEmitter/Buffer/Assertなどが利用できる
