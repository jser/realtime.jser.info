---
title: 'Security updates for all active release lines, July 2017 | Node.js'
author: azu
layout: post
itemUrl: 'https://nodejs.org/en/blog/vulnerability/july-2017-security-releases/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/07/index.json'
date: '2017-07-12T01:19:51Z'
tags:
  - node.js
  - ReleaseNote
  - security
---
Node.jsのv4,6,7,8のセキュリティアップデート。
V8 snapshotsを有効化してる場合に問題があるため、デフォルトでsnapshotsが無効化された。
この問題が解決されるまで`vm.runInNewContext`のパフォーマンスが低下した状態となる。
また、`http.get()`と`auth`プロパティの脆弱性の修正など
