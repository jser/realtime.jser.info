---
title: Release v8.7.0 · pnpm/pnpm
author: azu
layout: post
itemUrl: 'https://github.com/pnpm/pnpm/releases/tag/v8.7.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/08/index.json'
date: '2023-08-27T00:18:55Z'
tags:
  - pnpm
  - ReleaseNote
---
pnpm v8.7.0リリース。
`worker_threads`を使ったパッケージの解凍処理でパフォーマンスの改善。
v8.0.0では依存する最小バージョンをインストールする`resolution-mode: lowest`がデフォルトだったが、v8.7.0で`resolution-mode: highest`に変更。
`pnpm import`がnpmのlockfileVersion 3をサポートなど
