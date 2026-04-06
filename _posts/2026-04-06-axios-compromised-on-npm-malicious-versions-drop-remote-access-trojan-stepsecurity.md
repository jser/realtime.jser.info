---
title: >-
  axios Compromised on npm - Malicious Versions Drop Remote Access Trojan -
  StepSecurity
author: azu
layout: post
itemUrl: >-
  https://www.stepsecurity.io/blog/axios-compromised-on-npm-malicious-versions-drop-remote-access-trojan
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/04/index.json'
date: '2026-04-06T00:56:52Z'
tags:
  - npm
  - security
  - article
relatedLinks:
  - title: Attackers Are Hunting High-Impact Node.js Maintainers in a C...
    url: 'https://socket.dev/blog/attackers-hunting-high-impact-nodejs-maintainers'
  - title: The Hidden Blast Radius of the Axios Compromise - Socket
    url: 'https://socket.dev/blog/hidden-blast-radius-of-the-axios-compromise'
---
axiosのnpmパッケージに対するサプライチェーン攻撃について。
ソーシャルエンジニアリングによりメンテナーアカウントが乗っ取られ、悪意のある`axios@1.14.1`と`axios@0.30.4`が公開された。
これらのバージョンには`plain-crypto-js`というマルウェアが依存関係として追加されている。
postinstallフックを通じてmacOS/Windows/Linux向けのRemote Access Trojan(RAT)をインストールする仕組みになっていた。
