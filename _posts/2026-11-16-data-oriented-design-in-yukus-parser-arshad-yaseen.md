---
title: 'Data-Oriented Design in Yuku&#039;s Parser - Arshad Yaseen'
author: azu
layout: post
itemUrl: 'https://www.arshad.fyi/posts/yuku-parser.html'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/11/index.json'
date: '2026-11-16T05:00:48Z'
tags:
  - JavaScript
  - TypeScript
  - Zig
  - AST
  - performance
  - article
---
Zig製のJavaScript/TypeScriptパーサーYukuのデータ指向設計について。
ASTのノードをポインタではなく配列のインデックスで参照する構造、作業用バッファの再利用、文字列のオフセット管理を解説している。
また、ArrayBufferを使ったASTの受け渡しと、JavaScript側のデコーダーの自動生成について紹介している。
