---
title: '総行数57,000の巨大CSS群をLessに書き換えた軌跡 - mixi Engineers&#039; Blog'
author: azu
layout: post
itemUrl: 'http://alpha.mixi.co.jp/entry/2015/12/20/000000'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2015/12/index.json'
date: '2015-12-20T10:25:20Z'
tags:
  - CSS
  - LESS
  - webkit
relatedLinks:
  - title: マルチブラウザやりました (DMM.Study Night)
    url: 'http://www.slideshare.net/sugibigmuff/dmmstudy-night'
---
-webkit- prefixから標準への書き換えを行った話。
CSS:fixmeで標準記法へ直し、Autoprefixerでプレフィックス対応し、Lessを使い構造的に管理しやすくしていく
