---
title: Keeping things fresh with stale-while-revalidate  |  web.dev
author: azu
layout: post
itemUrl: 'https://web.dev/stale-while-revalidate/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/07/index.json'
date: '2019-07-26T22:42:44Z'
tags:
  - browser
  - HTTP
  - article
  - performance
---
Chrome 75とFirefox 68でサポートされた`stale-while-revalidate` HTTPヘッダサポートについて。
一定時間はキャッシュを利用するが、同時にバックグラウンドでキャッシュを更新する。
`Cache-Control: max-age=1, stale-while-revalidate=59`の挙動解説やユースケースなどについて
