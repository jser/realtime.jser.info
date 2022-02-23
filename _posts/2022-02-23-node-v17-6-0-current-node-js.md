---
title: Node v17.6.0 (Current) | Node.js
author: azu
layout: post
itemUrl: 'https://nodejs.org/en/blog/release/v17.6.0/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/02/index.json'
date: '2022-02-23T12:39:14Z'
tags:
  - node.js
  - ReleaseNote
relatedLinks:
  - title: >-
      stream: add map method to Readable: by benjamingr · Pull Request #40815 ·
      nodejs/node
    url: 'https://github.com/nodejs/node/pull/40815'
---
Node.js 17.6.0リリース。
StreamにIterator helperの`map`などをメソッドを追加すると壊れるモジュールがあったため、仕様への準拠を一時的にrevert。
`--experimental-https-modules`のフラグ付きでHTTP URLをESMモジュールとしてロードできるように。
また`process.on(&quot;multipleResolves&quot;, ...)`がDeprecatedとなった。
