---
title: 'azu/eslint-cjs-to-esm: ESLint wrapper for migration from CJS to ESM.'
author: azu
layout: post
itemUrl: 'https://github.com/azu/eslint-cjs-to-esm'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/01/index.json'
date: '2023-01-15T15:40:03Z'
tags:
  - node.js
  - JavaScript
  - ECMAScript
  - CommonJS
  - Tools
  - ESLint
---
CommonJSとESMへと変換するのを補助ツール。
ESLintをラップしていて、CJS to ESM関係のルールをビルトインしている。
importしてるパスへの`.js`の追加や`require`/`exports`などのCJSでしか使えない機能の禁止など
