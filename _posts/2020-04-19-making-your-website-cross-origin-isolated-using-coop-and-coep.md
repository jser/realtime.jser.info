---
title: Making your website "cross-origin isolated" using COOP and COEP
author: azu
layout: post
itemUrl: 'https://web.dev/coop-coep/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/04/index.json'
date: '2020-04-19T13:48:24Z'
tags:
  - Chrome
  - security
  - article
relatedLinks:
  - title: >-
      Raise the bar for SharedArrayBuffer via postMessage() by annevk · Pull
      Request #4734 · whatwg/html
    url: 'https://github.com/whatwg/html/pull/4734'
  - title: COOP and COEP explained - Google ドキュメント
    url: >-
      https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit
  - title: Understanding &quot;same-site&quot; and &quot;same-origin&quot;
    url: 'https://web.dev/same-site-same-origin/'
---
`SharedArrayBuffer`など高度な機能は`self.crossOriginIsolated`が`true`の場合に利用できる。
`crossOriginIsolated`を有効にするには、`Cross-Origin-Embedder-Policy`と`Cross-Origin-Opener-Policy`の対応が必要という話。
`Cross-Origin-*` HTTPヘッダーの動きについての解説
