---
title: Node.jsのネイティブES Modulesサポートが抱える問題を解決するBabelプラグインを書いた
author: azu
layout: post
itemUrl: 'https://zenn.dev/qnighy/articles/6267716578c76d'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/12/index.json'
date: '2021-12-29T15:46:53Z'
tags:
  - node.js
  - ECMAScript
  - module
  - babel
relatedLinks:
  - title: >-
      qnighy/node-cjs-interop: Babel plugin and helper functions for
      interoperation between Node.js native ESM and Babel ESM
    url: 'https://github.com/qnighy/node-cjs-interop'
---
ESMとCJS間のinteropを扱うBabelプラグインとコマンドラインツール。
Node.jsのネイティブESMサポートは`__esModule`を扱わないため、Babelなどで変換されたCJSを扱うときに違いが発生する。この違いを吸収する目的のツール
