---
title: 'ehmicky/safe-json-value: ⛑️ JSON serialization should never fail'
author: azu
layout: post
itemUrl: 'https://github.com/ehmicky/safe-json-value'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/07/index.json'
date: '2022-07-31T23:39:18Z'
tags:
  - JavaScript
  - library
  - JSON
---
例外を投げないJSONのシリアライズを提供するライブラリ。
シリアライズできないときは`error`プロパティにエラーを入れ、例外となる値は結果から除外するなどしている。
