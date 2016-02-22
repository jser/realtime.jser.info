---
title: 'trueadm/inferno: An extremely fast, isomorphic JavaScript library for building modern user interfaces'
author: azu
layout: post
itemUrl: 'https://github.com/trueadm/inferno'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2016/02/index.json'
date: '2016-02-22T02:53:37+00:00'
tags:
  - JavaScript
  - VirtualDOM
  - React
  - library
relatedLinks:
  - title: "What's the difference from virtual dom libraries? · Issue #21 · trueadm/inferno"
    url: 'https://github.com/trueadm/inferno/issues/21'
---
ReactライクなVirtual DOMライブラリ。
テンプレートからVirtual DOM Elementを作る段階で、静的/動的なのかを調べている。
これにより実行時にはdiff/patchを行わないフラグメントを作ることでパフォーマンスの向上を狙っている。
