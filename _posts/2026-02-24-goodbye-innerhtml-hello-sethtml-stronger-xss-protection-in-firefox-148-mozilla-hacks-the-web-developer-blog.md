---
title: >-
  Goodbye innerHTML, Hello setHTML: Stronger XSS Protection in Firefox 148 -
  Mozilla Hacks - the Web developer blog
author: azu
layout: post
itemUrl: >-
  https://hacks.mozilla.org/2026/02/goodbye-innerhtml-hello-sethtml-stronger-xss-protection-in-firefox-148/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/02/index.json'
date: '2026-02-24T14:32:05Z'
tags:
  - Firefox
  - XSS
  - security
  - DOM
  - article
---
Firefox 148で実装されたSanitizer APIについて。
`innerHTML`はHTMLをフィルタリングせずに挿入するが、`setHTML()`は自動的にサニタイズしてXSSの原因となる危険な要素や属性を除去する。
Sanitizer APIのデフォルト設定やカスタム設定、Trusted Typesとの組み合わせについて。

