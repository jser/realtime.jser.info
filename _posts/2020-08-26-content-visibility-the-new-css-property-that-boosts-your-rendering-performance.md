---
title: >-
  content-visibility: the new CSS property that boosts your rendering
  performance
author: azu
layout: post
itemUrl: 'https://web.dev/content-visibility/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/08/index.json'
date: '2020-08-26T14:21:09Z'
tags:
  - CSS
  - article
  - Chrome
  - performance
---
Chrome 85で実装されたCSS `content-visibility`プロパティについて。
CSS Containmentに依存した仕様。
DOMのサブツリーに予測できる空間を定義することで、ブラウザがレンダリングを省略して最適化するための仕組み。
`display: none`、`visibility: hidden`との違い、`content-visibility`プロパティのユースケースとしての無限スクロールなどについて
