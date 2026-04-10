---
title: Webpack 5.106 | webpack
author: azu
layout: post
itemUrl: 'https://webpack.js.org/blog/2026-04-08-webpack-5-106/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/04/index.json'
date: '2026-04-10T00:48:35Z'
tags:
  - webpack
  - ReleaseNote
---
webpack 5.106リリース。
Plugin Validation Hook(`compiler.hooks.validate`)の追加。
CSS Modulesのランタイムスタイル注入(`exportType: &quot;style&quot;`)のサポート。
将来的にcss-loader/style-loader/mini-css-extract-pluginを廃止予定。
CommonJSのTree Shaking改善、`create-webpack-app`ツールの追加。
実験的な機能として、ES Stage 3のSource Phase Importsによる実験的なWebAssemblyサポート、oxc-parserのサポート。
webpack-cli 7.0.0ではNode.js 20.9.0+が必要となり、ネイティブTypeScriptサポートが追加されている。
