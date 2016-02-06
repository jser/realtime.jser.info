---
title: ES6 const is not about immutability · Mathias Bynens
author: azu
layout: post
itemUrl: 'https://mathiasbynens.be/notes/es6-const'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2016/02/index.json'
date: '2016-02-06T14:31:30+00:00'
tags:
  - ECMAScript
  - JavaScript
---
`const`は値を不変(immutable)にするのではなく、値へのバインディングを不変にするという意味。
そのためオブジェクトのプロパティへの代入は可能のままだが、オブジェクトの不変については`Object.freeze()`が扱う。また`let`と`const`の使い分けについて
