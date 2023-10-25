---
title: 'Goodbye, Node.js Buffer — Sindre Sorhus'
author: azu
layout: post
itemUrl: 'https://sindresorhus.com/blog/goodbye-nodejs-buffer'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/10/index.json'
date: '2023-10-25T00:52:57Z'
tags:
  - nodejs
  - opinion
  - article
relatedLinks:
  - title: 'Start moving to Uint8Array in new APIs? · Issue #41588 · nodejs/node'
    url: 'https://github.com/nodejs/node/issues/41588'
---
Node.jsの`Buffer`はブラウザとの互換性がないため、`Uint8Array`を代わりに使おうという話。
現在の`Buffer`は`Uint8Array`のサブクラスとして実装されているが、`slice()`の動作の違いや移植性が悪いというなどの問題がある。
`Uint8Array`を直接扱う方法やマイグレーションなどについて
