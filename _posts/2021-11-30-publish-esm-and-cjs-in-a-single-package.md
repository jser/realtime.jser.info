---
title: Publish ESM and CJS in a single package
author: azu
layout: post
itemUrl: 'https://antfu.me/posts/publish-esm-and-cjs'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/11/index.json'
date: '2021-11-30T01:51:12Z'
tags:
  - node.js
  - CommonJS
  - ECMAScript
  - module
  - article
---
CommonJSとESMのデュアルフォーマットでのパッケージ公開について。
`package.json`の`exports`フィールドでの使い分け、tsupとunbuildのビルドについて。
ESMでは利用できないCommonJSの`__dirname`などの補完方法について
