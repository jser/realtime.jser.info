---
title: Testacular - Spectacular Test Runner for JavaScript
author: azu
layout: post
itemUrl: 'http://vojtajina.github.com/testacular/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2012/07/index.json'
date: '2012-07-31T15:00:00.000Z'
---
Node.js と Socket.ioを使ってJavaScriptテストフレームワーク。

保存を監視して、開発しながらテストを実行するような環境。

Jasmineのアダプターが実装されている。

WebStorm Integrationがあり、WebStorm上のConsoleで実行した場合、stack traceから該当行へジャンプできる。

目的としては、AngularJSのテストJSTDで動いているが、JSTDにも多くの問題があり、テストを安定して速く実行できるシンプルなツールが必要とされていたためつくられている。

jsdomを使ってブラウザなしでも実行できるようにしたり、より速く実行でき、開発中の手助けになるようなテストフレームワークを目指している。
