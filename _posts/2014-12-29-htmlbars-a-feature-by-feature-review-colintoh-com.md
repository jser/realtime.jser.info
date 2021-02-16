---
title: HTMLBars - A Feature-by-Feature Review | colintoh.com
author: azu
layout: post
itemUrl: 'http://colintoh.com/blog/htmlbars'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2014/12/index.json'
date: '2014-12-29T12:59:03Z'
tags:
  - JavaScript
---
Emberが採用するHTMLBarsについて。
以前のEmberのレンダリング
テンプレート -&gt; AST -&gt; HTML String -&gt; DOM
というフローだった。
HTMLBarsでは
テンプレート -&gt; JS関数 -&gt; DOM
というフローとなった理由や仕組みについて。
