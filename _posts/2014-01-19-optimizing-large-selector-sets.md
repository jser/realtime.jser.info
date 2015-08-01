---
title: Optimizing large selector sets
author: azu
layout: post
itemUrl: 'https://github.com/blog/1756-optimizing-large-selector-sets'
date: '2014-01-19T08:15:48.634Z'
tags:
  - jQuery
  - CSS
  - JavaScript
relatedLinks:
  - title: josh/selector-set
    url: 'https://github.com/josh/selector-set'
  - title: josh/jquery-selector-set
    url: 'https://github.com/josh/jquery-selector-set'
---
CSS Selectorのマッチを、最初にindexを作っておいてO(1)で探索をできるようにするSelectorSetについて。
jQueryと統合できるようになってて、`on`によるdelegate eventsを改善する。
