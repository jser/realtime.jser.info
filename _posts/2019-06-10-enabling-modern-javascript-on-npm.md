---
title: Enabling Modern JavaScript on npm
author: azu
layout: post
itemUrl: 'https://jasonformat.com/enabling-modern-js-on-npm/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/06/index.json'
date: '2019-06-10T13:51:22Z'
tags:
  - JavaScript
  - article
  - npm
---
npmにパッケージとして公開するモジュールについて。
Bundleツールなどの変化によって、Transpile済みのファイルのみを配布すると利用者は最適化ができない問題について。
`package.json`の`"main"`、`"module"`、`"unpkg"`フィールドと配布するモジュールの形式やパッケージ作者が配布時に気をつける点。
またmicrobundleや`@pika/pack`などのパッケージ配布の補助ツールについてなど
