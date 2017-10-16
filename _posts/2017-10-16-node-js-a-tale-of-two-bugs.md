---
title: Node.js - a tale of two bugs
author: azu
layout: post
itemUrl: 'https://dev.to/mikeralphson/nodejs---a-tale-of-two-bugs-18c'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/10/index.json'
date: '2017-10-16T14:47:23Z'
tags:
  - node.js
  - issue
  - performance
  - article
---
Node.jsで7.x以降にパフォーマンスリグレッションを見つけ、どのようにデバッグし問題を特定したかについて。
原因としてはV8の`Error.captureStackTrace`のリグレッションであり、Node.js 8.7.0で修正される予定。
