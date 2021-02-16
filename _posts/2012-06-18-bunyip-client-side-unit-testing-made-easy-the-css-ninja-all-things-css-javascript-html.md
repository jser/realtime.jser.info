---
title: >-
  Bunyip: client-side unit testing made easy | The CSS Ninja - All things CSS,
  JavaScript &amp; HTML
author: azu
layout: post
itemUrl: 'http://www.thecssninja.com/javascript/bunyip'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2012/06/index.json'
date: '2012-06-18T10:30:00Z'
---
JsTDやBuster.JSのようなローカルサーバを立ててテストを動かすクライアントサイトのユニットテストフレームワーク。
特徴的なのはSSHトンネルを作って、BrowserStack APIを使ってローカルで実際にブラウザを動かさないでクロスブラウザテストを行えるような仕組みを持っている。
またテスト自体はYUI testやadpterを経由してQUnit、Jasmineなどを使用する。
