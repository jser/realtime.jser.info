---
title: 'Lunuy/iterable-weak: Iterable WeakSet / WeakMap using ES2021 WeakRef'
author: azu
layout: post
itemUrl: 'https://github.com/Lunuy/iterable-weak'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/11/index.json'
date: '2020-11-16T00:20:27Z'
tags:
  - JavaScript
  - library
  - ECMAScript
---
WeakRefを使ったIterableなWeakMap/WeakSetの実装ライブラリ。
Iterateできるように要素を参照するが、WeakRefのFinalizationRegistryを使って参照を解放するようになっている
