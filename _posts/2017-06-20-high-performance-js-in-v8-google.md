---
title: High Performance JS in V8 - Google スライド
author: azu
layout: post
itemUrl: >-
  https://docs.google.com/presentation/d/1KCcA-WAyhGs0SEOrfU21fjaTWTxvNxYLwmNlGIbuZFw/edit#slide=id.p
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/06/index.json'
date: '2017-06-20T06:44:23Z'
tags:
  - V8
  - performance
  - slide
---
V8のES2015+のパフォーマンスについてのスライド。
CrankshaftはES2015を最適化しないため遅かった。またtry-catchなどがあると最適化できなかった。
新しいpipelineのIgnition + Turbofanではその部分が改善されているという話。
