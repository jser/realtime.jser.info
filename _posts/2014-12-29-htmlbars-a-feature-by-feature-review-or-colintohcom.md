---
title: 'HTMLBars - A Feature-by-Feature Review | colintoh.com'
author: azu
layout: post
itemUrl: 'http://colintoh.com/blog/htmlbars'
date: '2014-12-29T12:59:03.221Z'
tags:
  - JavaScript
---
Emberが採用するHTMLBarsについて。
以前のEmberのレンダリング
テンプレート -> AST -> HTML String -> DOM
というフローだった。
HTMLBarsでは
テンプレート -> JS関数 -> DOM
というフローとなった理由や仕組みについて。
