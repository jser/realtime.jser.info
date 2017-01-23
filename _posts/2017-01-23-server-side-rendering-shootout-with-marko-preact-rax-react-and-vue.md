---
title: 'Server-side Rendering Shootout with Marko, Preact, Rax, React and Vue'
author: azu
layout: post
itemUrl: >-
  https://hackernoon.com/server-side-rendering-shootout-with-marko-preact-rax-react-and-vue-25e1ae17800f
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/01/index.json'
date: '2017-01-23T01:17:25Z'
tags:
  - JavaScript
  - DOM
  - template
relatedLinks:
  - title: Marko v4 Multiple Compilation Targets
    url: 'https://gist.github.com/mlrawlings/8b67bee58df45709e232f689b873e1d1'
  - title: >-
      feat: add marko by mlrawlings · Pull Request #11 ·
      taobaofed/server-side-rendering-comparison
    url: 'https://github.com/taobaofed/server-side-rendering-comparison/pull/11'
  - title: marko/ROADMAP.md at master · marko-js/marko
    url: 'https://github.com/marko-js/marko/blob/master/ROADMAP.md'
---
UIライブラリ/テンプレートエンジンであるMarkoのサーバサイドレンダリングの高速化手法について。
Marko v4ではブラウザとサーバで出力方式を変えている。
クライアントサイドではVirtual DOMを使い、サーバサイドでは文字列結合をベースとした出力を使い分けている。
