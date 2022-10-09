---
title: Evolving Ember’s Major Version Process
author: azu
layout: post
itemUrl: 'https://blog.emberjs.com/evolving-embers-major-version-process/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/10/index.json'
date: '2022-10-09T02:55:35Z'
tags:
  - Ember
  - article
---
Emberはメジャーリリース(破壊的変更)を少なくするという方針であったため、メジャーリリースの間隔が長くなっていた。この間隔が長くなると非推奨の機能に取り除くタイミングがわかりにくくなるなどの弊害があった。
そのため、予測可能なリズムとして6周ごとにマイナーリリース、18ヶ月ごとにメジャーリリースとする。
また`X.10`以降にはDeprecationを増やさない、メジャーリリースはDeprecationを削除するのみというルールと取り入れ、開発者がDeprecationにいつ対応するべきかを明確にする。
