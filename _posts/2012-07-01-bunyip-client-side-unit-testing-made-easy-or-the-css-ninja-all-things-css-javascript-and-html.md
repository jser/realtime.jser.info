---
title: 'Bunyip: client-side unit testing made easy | The CSS Ninja - All things CSS, JavaScript & HTML'
author: azu
layout: post
itemUrl: 'http://www.thecssninja.com/javascript/bunyip'
date: '2012-06-30T15:00:00.000Z'
---
JsTDやBuster.JSのようなローカルサーバを立ててテストを動かすクライアントサイトのユニットテストフレームワーク。

特徴的なのはSSHトンネルを作って、BrowserStack APIを使ってローカルで実際にブラウザを動かさないでクロスブラウザテストを行えるような仕組みを持っている。

またテスト自体はYUI testやadpterを経由してQUnit、Jasmineなどを使用する。
