---
title: 'farm-fe/farm: Extremely fast Vite-compatible web build tool written in Rust'
author: azu
layout: post
itemUrl: 'https://github.com/farm-fe/farm'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/11/index.json'
date: '2023-11-03T04:41:41Z'
tags:
  - vite
  - rollup
  - bundler
  - Rust
  - Tools
  - JavaScript
relatedLinks:
  - title: rfcs/rfcs/003-partial-bundling/rfc.md at main · farm-fe/rfcs
    url: 'https://github.com/farm-fe/rfcs/blob/main/rfcs/003-partial-bundling/rfc.md'
---
Vite/Rollupプラグイン互換の仕組みを持ったRust製のBundlerツール。
ビルドパフォーマンス、devとproductionビルドでの一貫性、dev環境でbundleしないことでのリクエスト数の問題を解決する目的。
モジュールをグループという単位でbundleして、リクエスト数を削減とキャッシュヒット率の向上を目的にしたPartial Bundlingという仕組みを持つ。
