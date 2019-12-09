---
title: Improving Tracking Prevention in Microsoft Edge - Microsoft Edge Blog
author: azu
layout: post
itemUrl: >-
  https://blogs.windows.com/msedgedev/2019/12/03/improving-tracking-prevention-microsoft-edge-79/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/12/index.json'
date: '2019-12-09T00:14:07Z'
tags:
  - MSEdge
  - privacy
  - article
---
MSEdge on Chromiumに試験的に実装されているTracking Preventionについて。
FirefoxのETPと似たDisconnectのリストを使ったトラッカーのストレージアクセス、ネットワークアクセスのブロック。
ユーザーのサイトエンゲージメントスコアが `4.1` 以上となっている組織ドメインは対象から除外される。
保護レベルとしてBasic、Blanced、Strictの設定ができるようになっている。
