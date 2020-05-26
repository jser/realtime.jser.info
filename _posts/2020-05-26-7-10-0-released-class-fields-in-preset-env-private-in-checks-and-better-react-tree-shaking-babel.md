---
title: >-
  7.10.0 Released: Class Fields in preset-env, '#private in' checks and better
  React tree-shaking · Babel
author: azu
layout: post
itemUrl: 'https://babeljs.io/blog/2020/05/25/7.10.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/05/index.json'
date: '2020-05-26T23:24:24Z'
tags:
  - babel
  - ReleaseNote
relatedLinks:
  - title: >-
      babel/babel-polyfills: A set of Babel plugins that enable injecting
      different polyfills with different strategies in your compiled code.
    url: 'https://github.com/babel/babel-polyfills'
---
Babel 7.10.0リリース。
ES2015のUnicode escapeをES5に変換する`@babel/plugin-transform-unicode-escapes`の追加。
ES Module AttributesのProposalのパースを行う`babel-plugin-syntax-module-attributes`の追加。
`import.meta`のパースをデフォルトでサポート、`preset-react`に`/*#__PURE__#/`アノテーションをつけるプラグインの追加。
core-js以外も選べるpolyfillエンジンの追加など
