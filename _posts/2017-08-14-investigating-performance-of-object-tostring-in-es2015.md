---
title: 'Investigating Performance of Object#toString in ES2015'
author: azu
layout: post
itemUrl: >-
  https://ponyfoo.com/articles/investigating-performance-object-prototype-to-string-es2015
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/08/index.json'
date: '2017-08-14T12:21:52Z'
tags:
  - JavaScript
  - V8
  - performance
  - firefox
relatedLinks:
  - title: 1369042 - Optimize the @@toStringTag and @@toPrimitive lookups
    url: 'https://bugzilla.mozilla.org/show_bug.cgi?id=1369042#c0'
  - title: Interesting Symbols - Google ドキュメント
    url: >-
      https://docs.google.com/document/d/1q_Y2YM8S055RF1R6qvDe65kOEVO99tdviI1vaDcbnmc/edit#
---
V8の`Object.prototype.toString()`の最適化について。
ES2015で`Symbol.toStringTag`が追加され、toStringはこの実装を考慮する必要がある。(toString自体はオブジェクトの型判定によく使われている)
オブジェクトが`Symbol.toStringTag`を実装しているかのフラグをMapで持っておき、持ってない場合は余計なlookupを省くようにしたという話。
元々はSpiderMonkeyでデザインされていた方法をportした内容についての解説。
