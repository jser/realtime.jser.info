---
title: Using Native JavaScript Modules in Production Today — Philip Walton
author: azu
layout: post
itemUrl: >-
  https://philipwalton.com/articles/using-native-javascript-modules-in-production-today/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/08/index.json'
date: '2019-08-27T02:38:03Z'
tags:
  - JavaScript
  - module
  - article
---
ES moduleをそのまま使うためのテクニックについての話。
RollupをつかってnpmモジュールごとにES moduleのchunkを作成し、`&lt;script module`でのロード、`modulepreload`でのpreload。
Dynamic Importでの動的ロードとpolyfill、ES moduleをサポートしてない環境への`&lt;script nonmodule&gt;`での読み込みについてなど。
