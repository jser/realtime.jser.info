---
title: Better tree shaking with deep scope analysis – webpack – Medium
author: azu
layout: post
itemUrl: >-
  https://medium.com/webpack/better-tree-shaking-with-deep-scope-analysis-a0b788c0ce77
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/08/index.json'
date: '2018-08-14T23:45:43Z'
tags:
  - webpack
  - JavaScript
  - article
relatedLinks:
  - title: >-
      vincentdchan/webpack-deep-scope-analysis-plugin: A webpack plugin for deep
      scope analysis
    url: 'https://github.com/vincentdchan/webpack-deep-scope-analysis-plugin'
  - title: 'Unexpected code after tree-shake · Issue #6264 · webpack/webpack'
    url: 'https://github.com/webpack/webpack/issues/6264'
---
webpackのTree Shakingではモジュール間同士の依存に関するDead Code Eliminationに動かないケースがあった。
そのパターンを解決するプラグインとその動作の解説について
