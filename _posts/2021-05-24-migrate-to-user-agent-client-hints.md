---
title: Migrate to User-Agent Client Hints
author: azu
layout: post
itemUrl: 'https://web.dev/migrate-to-ua-ch/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/05/index.json'
date: '2021-05-24T15:33:35Z'
tags:
  - Chrome
  - article
  - privacy
relatedLinks:
  - title: 'Chromium Blog: Update on User-Agent String Reduction in Chrome'
    url: >-
      https://blog.chromium.org/2021/05/update-on-user-agent-string-reduction.html
  - title: >-
      GoogleChromeLabs/uach-retrofill: This snippet illustrates how to
      reconstruct the legacy navigator.userAgent string value from the modern
      navigator.userAgentData values.
    url: 'https://github.com/GoogleChromeLabs/uach-retrofill'
---
`navigator.userAgent`などがDeprecatedとなり固定化されるため、その代わりとなるUser-Agent Client Hintsについて。
JavaScriptのAPIとしての`navigator.userAgentData`と`navigator.userAgentData.getHighEntropyValues`。
HTTPヘッダUA Client Hintを扱う`Accept-CH`と`Sec-CH-UA-*`について。
また、Client HintからレガシーなUA文字列を作成するライブラリについてなど
