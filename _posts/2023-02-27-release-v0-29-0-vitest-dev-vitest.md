---
title: Release v0.29.0 · vitest-dev/vitest
author: azu
layout: post
itemUrl: 'https://github.com/vitest-dev/vitest/releases/tag/v0.29.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/02/index.json'
date: '2023-02-27T15:43:30Z'
tags:
  - vite
  - testing
  - ReleaseNote
---
vitest v0.29.0リリース。
試験的に依存関係をbundleして読み込むことでパフォーマンスを改善する`deps.experimentalOptimizer`オプションを追加。
また、`--no-threads`オプション使っている場合は、`--single-thread`や`deps.experimentalOptimizer`を代わりに使うことを推奨している。
