---
title: CommonJSからES Modulesへの移行する方法。トップダウンかボトムアップか | Web Scratch
author: azu
layout: post
itemUrl: 'https://efcl.info/2023/07/05/convert-to-esm/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/07/index.json'
date: '2023-07-05T14:38:20Z'
tags:
  - JavaScript
  - node.js
  - ECMAScript
  - CommonJS
  - article
---
ESMへの移行は、依存関係の読み込み側に影響を与えるため、ボトムアップではなくトップダウンで段階的な移行ができるという話。
依存ツリーの作成や段階的な移行をするための境界線の見つけ方、CJSからESMを読む回避策などについて
