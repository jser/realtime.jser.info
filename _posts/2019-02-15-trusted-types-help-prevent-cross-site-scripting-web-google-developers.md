---
title: Trusted Types help prevent Cross-Site Scripting  |  Web  |  Google Developers
author: azu
layout: post
itemUrl: 'https://developers.google.com/web/updates/2019/02/trusted-types'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/02/index.json'
date: '2019-02-15T21:15:56Z'
tags:
  - Chrome
  - XSS
  - HTML
  - JavaScript
  - article
---
Chrome 73でTrusted Typesがフラグ付きで実装され、76までOrigin Trialとして試せる。
TrustTypesはXSSのsinkとなる部分をポリシーでチェックする。
ポリシーに一致しない場合はエラーに落とすことで回避するAPIと仕組み
