---
title: 'Are your mixins ECMAScript 5 compatible? | NCZOnline'
author: azu
layout: post
itemUrl: 'http://www.nczonline.net/blog/2012/12/11/are-your-mixins-ecmascript-5-compatible/'
date: '2012-12-31T15:00:00.000Z'
---
mixinをES5で書く場合について。

definePropertyの第三引数でディスクリプタもコピーする

Object.defineProperty(receiver, property, Object.getOwnPropertyDescriptor(supplier, property));
