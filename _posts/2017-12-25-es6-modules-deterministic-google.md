---
title: ES6 Modules のエラー処理を決定的(deterministic)にした話 - Google ドキュメント
author: azu
layout: post
itemUrl: >-
  https://docs.google.com/document/d/1Wuc2LVLb2Ii-itnA4sKw_KndJGvZ4mvdfw0POm5qcs4/edit#
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/12/index.json'
date: '2017-12-25T07:29:44Z'
tags:
  - Chrome
  - module
  - JavaScript
  - spec
  - article
  - ECMAScript
---
ES Modules(仕様)のエラーがネットワークに依存したものとなっていて、毎回異なるエラーになる問題があった。
エラーが毎回同じ結果となるように、仕様をどのように修正していったかについて。
