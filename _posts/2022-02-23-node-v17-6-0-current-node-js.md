---
title: Node v17.6.0 (Current) | Node.js
author: azu
layout: post
itemUrl: 'https://nodejs.org/en/blog/release/v17.6.0/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/02/index.json'
date: '2022-02-23T12:36:44Z'
tags:
  - node.js
  - ReleaseNote
---
Node.js 17.6.0リリース。
Streamに`map`などをメソッドを追加すると壊れるモジュールがあったためrevertされている。
`--experimental-https-modules`のフラグ付きでHTTP URLをESMモジュールとしてロードできるように。
また`process.on(&quot;multipleResolves&quot;, ...)`がDeprecatedとなった。
