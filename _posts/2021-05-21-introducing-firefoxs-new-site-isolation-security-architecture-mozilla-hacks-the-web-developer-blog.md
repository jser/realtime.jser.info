---
title: >-
  Introducing Firefox&#039;s new Site Isolation Security Architecture - Mozilla
  Hacks - the Web developer blog
author: azu
layout: post
itemUrl: >-
  https://hacks.mozilla.org/2021/05/introducing-firefox-new-site-isolation-security-architecture/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/05/index.json'
date: '2021-05-21T02:16:32Z'
tags:
  - Firefox
  - security
  - article
---
FirefoxのSite Isolationのアーキテクチャについての記事。
eTLDベースのSiteごとにプロセス分け、メモリを相互に分離した状態でリソースをロードすることで、Spectreなどのサイドチャネル攻撃を防止する。
また、サブフレームもトップレベルが異なるSiteなら、別プロセスで読むこむようになっている。
