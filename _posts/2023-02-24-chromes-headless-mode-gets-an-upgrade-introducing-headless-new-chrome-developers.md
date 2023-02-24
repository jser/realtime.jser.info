---
title: >-
  Chrome’s Headless mode gets an upgrade: introducing `--headless=new` - Chrome
  Developers
author: azu
layout: post
itemUrl: 'https://developer.chrome.com/articles/new-headless/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/02/index.json'
date: '2023-02-24T13:17:56Z'
tags:
  - Chrome
  - article
  - puppeteer
---
Chromeの新しいHeadlessモードについて。
`chrome --headless=new`で実行でき、Puppeteerなどからもopt-inで利用できる。
今まではヘッドレス用の実装が分かれていたためメンテナンスの問題があったが、新しい実装ではヘッドレスありなしが統合される形となった。
