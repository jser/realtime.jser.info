---
title: Safely reviving shared memory - Mozilla Hacks - the Web developer blog
author: azu
layout: post
itemUrl: 'https://hacks.mozilla.org/2020/07/safely-reviving-shared-memory/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/07/index.json'
date: '2020-07-29T15:14:29Z'
tags:
  - Firefox
  - security
  - JavaScript
relatedLinks:
  - title: Why you need &quot;cross-origin isolated&quot; for powerful features
    url: 'https://web.dev/why-coop-coep/'
---
FirefoxでSpectreへの対応として無効になっていた`SharedArrayBuffer`が再度利用できるようになる話。
プロセス分離、`Cross-Origin-Opener-Policy`と`Cross-Origin-Embedder-Policy`でCross-origin isolationについて。

