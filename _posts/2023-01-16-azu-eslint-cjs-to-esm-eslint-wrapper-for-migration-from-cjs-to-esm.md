---
title: 'azu/eslint-cjs-to-esm: ESLint wrapper for migration from CJS to ESM.'
author: azu
layout: post
itemUrl: 'https://github.com/azu/eslint-cjs-to-esm'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/01/index.json'
date: '2023-01-16T03:14:17Z'
tags:
  - node.js
  - JavaScript
  - ECMAScript
  - CommonJS
  - Tools
  - ESLint
---
CommonJSからESMへのマイグレーションを補助するツール。
ESLintをラップしていて、CJS to ESMを扱うルールをビルトインしている。
importしてるパスへの`.js`の追加や`require`/`exports`などのCJSでしか使えない機能の禁止など
