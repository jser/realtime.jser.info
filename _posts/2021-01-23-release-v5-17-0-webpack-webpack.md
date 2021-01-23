---
title: Release v5.17.0 · webpack/webpack
author: azu
layout: post
itemUrl: 'https://github.com/webpack/webpack/releases/tag/v5.17.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/01/index.json'
date: '2021-01-23T03:20:37Z'
tags:
  - webpack
  - ReleaseNote
relatedLinks:
  - title: >-
      liximomo/lazy-compile-webpack-plugin: Boost webpack startup time by lazily
      compiling dynamic imports
    url: 'https://github.com/liximomo/lazy-compile-webpack-plugin'
---
webpack 5.17.0リリース。
実験的な機能として、Dynamic Importしているモジュールをアクセスした時にビルドできる`experiments.lazyCompilation`オプションを追加。
起動時にすべてをビルドしないことで、利用してないエントリポイントがビルドパフォーマンスに影響を与えないようにする目的。
