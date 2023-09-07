---
title: How we reduced the size of our JavaScript bundles by 33% - Dropbox
author: azu
layout: post
itemUrl: >-
  https://dropbox.tech/frontend/how-we-reduced-the-size-of-our-javascript-bundles-by-33-percent
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/09/index.json'
date: '2023-09-07T06:05:07Z'
tags:
  - JavaScript
  - bundler
  - article
---
Rollupを使ってCode Splitting/Tree Shakingを行うことでbundleサイズを小さくしたという話。
一方でRollupはメモリ上に全てのコードを持つためCIのビルドが不安定になった点、細かいchunkだと圧縮効率があまりよくなかった点についてなど
