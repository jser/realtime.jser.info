---
title: 'The dict pattern: objects without prototypes are better maps'
author: azu
layout: post
itemUrl: 'http://www.2ality.com/2013/10/dict-pattern.html'
date: '2013-10-14T11:50:06.952Z'
tags:
  - JavaScript
---
{} オブジェクトはObjectからのtoString等を持っているので、Object.create(null)を使い、よりキレイなオブジェクトを使う話について
