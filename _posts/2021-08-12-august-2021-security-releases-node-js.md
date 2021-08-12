---
title: August 2021 Security Releases | Node.js
author: azu
layout: post
itemUrl: 'https://nodejs.org/en/blog/vulnerability/aug-2021-security-releases/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/08/index.json'
date: '2021-08-12T04:46:17Z'
tags:
  - node.js
  - security
  - ReleaseNote
---
Node.jsのセキュリティアップデート。
それぞれ対応するNode v12.22.5 (LTS)、 Node v14.17.5 (LTS)、Node v16.6.2がリリースされている。
DNSライブラリc-aresのセキュリティ修正、`http2`のstreamを閉じた際のUse after freeの修正。
`rejectUnauthorized`に`undefined`を渡すと期限切れの証明書を受け付けていた問題の修正など
