---
title: Node v7.1.0 (Current) | Node.js
author: azu
layout: post
itemUrl: 'https://nodejs.org/en/blog/release/v7.1.0/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2016/11/index.json'
date: '2016-11-09T01:20:40Z'
tags:
  - node.js
  - ReleaseNote
relatedLinks:
  - title: >-
      lib: make `String(global) === &amp;#39;[object global]&amp;#39;` by
      addaleax · Pull Request #9279 · nodejs/node
    url: 'https://github.com/nodejs/node/pull/9279'
---
Node.js v7.1.0リリース。
V8の仕様追従により`Object.prototype.toString.call(global); // &quot;[object global]&quot;`となっていたのを修正するため、`global[Symbol.toStringTag]`が定義された。
