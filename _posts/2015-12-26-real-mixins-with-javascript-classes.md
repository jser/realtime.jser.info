---
title: '"Real" Mixins with JavaScript Classes'
author: azu
layout: post
itemUrl: 'http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2015/12/index.json'
date: '2015-12-26T04:55:32Z'
tags:
  - JavaScript
  - ECMAScript
---
ES6 Classesで多重継承やmixinは構文として用意されていないので、`class`を式として扱うことで解決する実装について。
`class MyClass extends mix(MySuperClass).with(A, B) {}`
