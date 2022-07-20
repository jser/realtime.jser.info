---
title: Vite 3 が採用した CJS Proxy による Dual Package 構成
author: azu
layout: post
itemUrl: 'https://zenn.dev/teppeis/articles/2022-07-npm-dual-pacakge-cjs-proxy'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/07/index.json'
date: '2022-07-20T01:07:21Z'
tags:
  - ECMAScript
  - vite
  - node.js
  - article
---
Viteが利用してるCJSとESMをdual packagesを対応する手法について。
CJSからESMを扱うために、非同期な関数のexportはDynamic Importsを含むラッパーを公開し、同期的な関数のexportはesbuildなどでbundle済みのものを公開する
