---
title: Release v0.16.0 · evanw/esbuild
author: azu
layout: post
itemUrl: 'https://github.com/evanw/esbuild/releases/tag/v0.16.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/12/index.json'
date: '2022-12-11T10:38:24Z'
tags:
  - JavaScript
  - Tools
  - ReleaseNote
---
esbuild v0.16.0リリース。
破壊的な変更として`esbuild-&lt;arch&gt;`のパッケージを`@esbuild/&lt;arch&gt;`へと変更、`define`パラメータのバリデーションを追加。
SVGのようにファイルをbase64する必要がない場合はしないように変更、`&lt;/script&gt;`を自動エスケープするように変更、`--legal-comments`のデフォルトを`none`に変更など
