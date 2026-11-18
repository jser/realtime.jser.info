---
title: Faster type-aware linting with tsrs | The JavaScript Oxidation Compiler
author: azu
layout: post
itemUrl: 'https://oxc.rs/blog/2026-11-17-faster-type-aware-linting-with-tsrs'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/11/index.json'
date: '2026-11-18T01:20:23Z'
tags:
  - TypeScript
  - Rust
  - lint
  - performance
  - article
---
OxlintにRust版TypeScript実装のtsrsをバックエンドとして追加。
型チェックとLintでTypeScriptの解析結果を共有し、処理速度とメモリ使用量を改善する。
`tsrs`パッケージをインストールすると自動で利用され、`oxlint --type-aware --type-check`で型チェックも同時に実行できる。
