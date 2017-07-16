---
title: 'Security updates for all active release lines, July 2017 | Node.js'
author: azu
layout: post
itemUrl: 'https://nodejs.org/en/blog/vulnerability/july-2017-security-releases/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/07/index.json'
date: '2017-07-16T10:59:04Z'
tags:
  - ReleaseNote
  - node.js
  - security
relatedLinks:
  - title: Node.js で発生した Hash flooding DoS とその内容について - from scratch
    url: 'http://yosuke-furukawa.hatenablog.com/entry/2017/07/15/104616'
---
Node.jsのv4,6,7,8のセキュリティアップデート。 V8 snapshotsを有効化してる場合に問題があるため、デフォルトでsnapshotsが無効化された。 この問題が解決されるまで`vm.runInNewContext`のパフォーマンスが低下した状態となる。
