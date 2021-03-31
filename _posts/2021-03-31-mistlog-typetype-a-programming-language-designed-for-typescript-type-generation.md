---
title: >-
  mistlog/typetype: A programming language designed for typescript type
  generation
author: azu
layout: post
itemUrl: 'https://github.com/mistlog/typetype'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/03/index.json'
date: '2021-03-31T14:34:01Z'
tags:
  - TypeScript
  - library
relatedLinks:
  - title: 'mistlog/react-peg: A react style parser generator based on PEG.js'
    url: 'https://github.com/mistlog/react-peg'
---
TypeScriptの型書くDSLのパーサとジェネレーター。
Conditional Typeを表現する`if`、Mapped Typesを表現する`for`などを使って型定義を書ける。
パーサはreact-pegを使い、パースしたASTからBabelを通してTSのコードを出力している
