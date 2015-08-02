---
title: 'Web Reflection: 5 Reasons You Should Avoid __proto__'
author: azu
layout: post
itemUrl: 'http://webreflection.blogspot.de/2013/03/5-reasons-you-should-avoid-proto.html'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2013/03/index.json'
date: '2013-03-30T11:37:12.936Z'
tags:
  - JavaScript
  - ECMA
---
__proto__ について。
var Dict = Object.create.bind(Object, null);
var dictionary = Dict();// とかES5を使った__proto__に関する面白い実装も載せてる
