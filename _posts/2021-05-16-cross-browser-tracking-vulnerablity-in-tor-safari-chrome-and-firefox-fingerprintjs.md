---
title: >-
  Cross-browser tracking vulnerablity in Tor, Safari, Chrome and Firefox -
  FingerprintJS
author: azu
layout: post
itemUrl: 'https://fingerprintjs.com/blog/external-protocol-flooding/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/05/index.json'
date: '2021-05-16T06:07:18Z'
tags:
  - browser
  - security
  - privacy
  - article
---
ブラウザからURLスキームでアプリを開くときの挙動を利用してフィンガープリントできるという話。
未知のプロトコルを開く際にはダイアログでの確認やユーザインタラクションが必要となっている。
しかし、それぞれのブラウザで既知のプロトコルや`about:blank`を使ったSOPでの抜け道で、どのアプリがインストールされているかを判定できるという話
