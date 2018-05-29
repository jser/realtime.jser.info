---
title: ブラウザのネットワークエラーをレポートさせるNetwork Error Loggingが来た - ASnoKaze blog
author: azu
layout: post
itemUrl: 'https://asnokaze.hatenablog.com/entry/2018/05/28/210830'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/05/index.json'
date: '2018-05-29T01:40:43Z'
tags:
  - Chrome
  - debug
  - network
  - article
---
Chrome開発版で実装されたNetwork Error Loggingについて。
ネットワークエラーが発生したときに指定したエンドポイントでレポートを送ることができる仕組み。
DNSやTCP、TLSなどについてのエラーをクライアントから送信できる
