---
title: 'The Secret Parameter, LFR, and Potential RCE in NodeJS Apps'
author: azu
layout: post
itemUrl: >-
  https://blog.shoebpatel.com/2021/01/23/The-Secret-Parameter-LFR-and-Potential-RCE-in-NodeJS-Apps/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/01/index.json'
date: '2021-01-26T02:13:23Z'
tags:
  - JavaScript
  - node.js
  - security
  - express
  - article
relatedLinks:
  - title: 'pillarjs/hbs: Express view engine wrapper for Handlebars'
    url: 'https://github.com/pillarjs/hbs'
  - title: Express 4.x - API リファレンス
    url: 'https://expressjs.com/ja/api.html#res.render'
---
Expressで`hbs`(handlebars)を使っている際に`res.render`の第2引数にユーザー入力をそのまま渡してしまうと、`layout`プロパティによって任意のファイルを読める問題について。
また、Handlerbars 4.0.14未満にあった脆弱性と組み合わせることでRCEにつながるという話
