---
title: 'V8 JavaScript Engine: V8 release v6.6'
author: azu
layout: post
itemUrl: 'https://v8project.blogspot.com/2018/03/v8-release-66.html'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/03/index.json'
date: '2018-03-31T02:40:44Z'
tags:
  - V8
  - Chrome
  - ReleaseNote
relatedLinks:
  - title: Function.prototype.toString revision
    url: 'https://tc39.github.io/Function-prototype-toString-revision/'
  - title: 'tc39/proposal-json-superset: Proposal to make all JSON text valid ECMA-262'
    url: 'https://github.com/tc39/proposal-json-superset'
  - title: >-
      tc39/proposal-string-left-right-trim: A proposal to the ECMAScript
      standard for including left and right trim of whitespace to strings
    url: 'https://github.com/tc39/proposal-string-left-right-trim'
---
V8 v6.6(Chrome 66)リリース。
ECMAScript Proposalの対応として`Function#toString()`の仕様追従、JSがJSONのsupersetとなる仕様追従。
また`catch`構文のパラメータを省略に対応、`String#trimStart`や`String#trimEnd`の実装など。
Background compilationの対応やAsync、Arrayのパフォーマンス改善など
