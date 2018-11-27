---
title: >-
  Malicious code found in npm package event-stream downloaded 8 million times in
  the past 2.5 months | Snyk
author: azu
layout: post
itemUrl: 'https://snyk.io/blog/malicious-code-found-in-npm-package-event-stream'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/11/index.json'
date: '2018-11-27T01:41:15Z'
tags:
  - node.js
  - npm
  - library
  - security
  - article
relatedLinks:
  - title: 'I don''t know what to say. · Issue #116 · dominictarr/event-stream'
    url: 'https://github.com/dominictarr/event-stream/issues/116'
  - title: statement on event-stream compromise
    url: 'https://gist.github.com/dominictarr/9fd9c1024c94592bc7268d36b8d83b3a'
---
`event-stream@3.x`と`flatmap-stream`の問題について。
`flatmap-stream`にwalletsからbitcoinを盗むコードが含まれており、`event-stream@3.x`がこのパッケージに依存していた問題について。
現在`flatmap-stream`はnpmからunpublishされている
