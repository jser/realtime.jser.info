---
title: >-
  Releasing Babel 8 today: ESM-only, drop ES5 default, and a smooth migration
  path · Babel
author: azu
layout: post
itemUrl: 'https://babeljs.io/blog/2026/06/16/8.0.0/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/06/index.json'
date: '2026-06-17T02:05:29Z'
tags:
  - babel
  - ReleaseNote
  - ECMAScript
  - nodejs
  - polyfill
relatedLinks:
  - title: Upgrade to Babel 8 (API) · Babel
    url: 'https://babeljs.io/docs/v8-migration-api/'
---
Babel 8.0.0リリース。
ESMのみで配布されるようになり、Node.js 24以降が必須となる破壊的変更を含む。
`@babel/preset-env`がデフォルトでES5へコンパイルしなくなり、Browserslistのデフォルト設定（ES2023相当）をターゲットとするように変更。
`loose`/`spec`オプションを削除し、`assumptions`への移行を推奨。
`corejs`/`useBuiltIns`オプションを削除し、`babel-plugin-polyfill-corejs3`プラグインの利用を推奨。
すべてのパッケージにTypeScriptの型定義を追加。多くのASTの変更を含む。
Babel 7は2027年6月までセキュリティサポートを継続する。
