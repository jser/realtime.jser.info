---
title: Using Native JavaScript Modules in Production Today — Philip Walton
author: azu
layout: post
itemUrl: >-
  https://philipwalton.com/articles/using-native-javascript-modules-in-production-today/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/08/index.json'
date: '2019-08-27T02:22:26Z'
tags:
  - JavaScript
  - module
  - article
---
ES moduleをそのまま使うための他クニックについての話。
RollupをつかってnpmモジュールごとにES moduleのchunkを作成し、`<script module`でのロード、`modulepreload`でのpreload。
Dynamic Importでの動的ロードとpolyfill、ES moduleをサポートしてない環境への`<script nonmodule>`での読み込みについてなど。
