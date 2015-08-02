---
title: 'Node.jsのrequireをインライン化、無駄なuse strictを取り除くモジュールを書いた | Web scratch'
author: azu
layout: post
itemUrl: 'http://efcl.info/2014/0316/res3719/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2014/03/index.json'
date: '2014-03-16T05:43:58+00:00'
tags:
  - JavaScript
  - AST
  - node.js
  - book
  - library
---
`require` で読み込むファイルのインライン化 と 無意味な `"use strict"` を削除するnode moduleについて。 JavaScript ASTを使った書き換えの方法について
