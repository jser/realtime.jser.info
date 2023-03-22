---
title: npm installとnpm ciの動作確認を簡単にやっておいた - Mitsuyuki.Shiiba
author: azu
layout: post
itemUrl: 'https://bufferings.hatenablog.com/entry/2023/03/21/145023'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/03/index.json'
date: '2023-03-22T03:16:10Z'
tags:
  - npm
  - article
  - CI
relatedLinks:
  - title: npm install と npm ci って結局どう使うの?2023年版 - Mitsuyuki.Shiiba
    url: 'https://bufferings.hatenablog.com/entry/2023/03/15/215044'
---
npm installとnpm ciとキャッシュについて。
`npm install`は`node_modules/`を再利用できるが、安全ではないケースもある。
`npm ci`は`node_modules/`を削除するため`~/.npm`をキャッシュとして使う必要があることについて。
