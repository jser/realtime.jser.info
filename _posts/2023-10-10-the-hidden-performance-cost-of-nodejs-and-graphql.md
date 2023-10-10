---
title: The Hidden Performance Cost of NodeJS and GraphQL
author: azu
layout: post
itemUrl: 'https://www.softwareatscale.dev/p/the-hidden-performance-cost-of-nodejs'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/10/index.json'
date: '2023-10-10T12:47:26Z'
tags:
  - nodejs
  - Promises
  - performance
  - article
---
GraphQLでresolverの処理が増えるほどパフォーマンスが悪くなった原因を調査した記事。
resolver内でPromiseの多用と`async_hooks`の利用がオーバーヘッドと関連しているという話。

