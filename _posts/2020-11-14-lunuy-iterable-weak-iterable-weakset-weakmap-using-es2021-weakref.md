---
title: 'Lunuy/iterable-weak: Iterable WeakSet / WeakMap using ES2021 WeakRef'
author: azu
layout: post
itemUrl: 'https://github.com/Lunuy/iterable-weak'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/11/index.json'
date: '2020-11-14T07:49:57Z'
tags:
  - JavaScript
  - library
---
WeakRefを使ったIterableなWeakMap/WeakSetの実装ライブラリ。
Iterateできるように要素を参照するが、WeakRefのFinalizationRegistryを使って参照を解放するようになっている
