---
title: Node.js にプロセスレベルの Permission が入りそうな話 - from scratch
author: azu
layout: post
itemUrl: 'https://yosuke-furukawa.hatenablog.com/entry/2023/01/12/160406'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/01/index.json'
date: '2023-01-13T02:35:11Z'
tags:
  - node.js
  - security
  - article
relatedLinks:
  - title: >-
      src,process: initial permission model implementation by RafaelGSS · Pull
      Request #44004 · nodejs/node
    url: 'https://github.com/nodejs/node/pull/44004'
  - title: 'Permission Model · Issue #791 · nodejs/security-wg'
    url: 'https://github.com/nodejs/security-wg/issues/791'
---
Node.jsで実装が進められているPermission Modelの実装について
