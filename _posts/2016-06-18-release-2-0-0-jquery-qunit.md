---
title: Release 2.0.0 · jquery/qunit
author: azu
layout: post
itemUrl: 'https://github.com/jquery/qunit/releases/tag/2.0.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2016/06/index.json'
date: '2016-06-18T04:36:17Z'
tags:
  - JavaScript
  - testing
  - library
  - ReleaseNote
relatedLinks:
  - title: QUnit 2.x Upgrade Guide | QUnit
    url: 'http://qunitjs.com/upgrade-guide-2.x/'
---
QUnit 2.0.0リリース。
非推奨のグローバル関数を削除、メソッドのリネームなど破壊的な変更が含まれれる

- `module()`、`test()`はそれぞれ`QUnit.*`以下に移動
- `start()`、`stop()`の代わりに`assert.async()`
- `setup`/`teardown`は`beforeEach`/`afterEach`に
- `QUnit.init`と`QUnit.reset`の削除
