---
title: Improving Tracking Prevention in Microsoft Edge - Microsoft Edge Blog
author: azu
layout: post
itemUrl: >-
  https://blogs.windows.com/msedgedev/2019/12/03/improving-tracking-prevention-microsoft-edge-79/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/12/index.json'
date: '2019-12-09T00:17:35Z'
tags:
  - MSEdge
  - privacy
  - article
relatedLinks:
  - title: >-
      Today’s Firefox Blocks Third-Party Tracking Cookies and Cryptomining by
      Default - The Mozilla Blog
    url: >-
      https://blog.mozilla.org/blog/2019/09/03/todays-firefox-blocks-third-party-tracking-cookies-and-cryptomining-by-default/
---
MSEdge on ChromiumにTracking Preventionが試験的に実装された。
FirefoxのETPと似たDisconnectのリストを使ったトラッカーのストレージアクセス、ネットワークアクセスのブロック。
ユーザーのサイトエンゲージメントスコアが `4.1` 以上となっている組織ドメインは対象から除外される。
保護レベルとしてBasic、Blanced、Strictの設定ができるようになっている。
