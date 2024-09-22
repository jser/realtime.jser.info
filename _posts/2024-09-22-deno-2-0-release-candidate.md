---
title: Deno 2.0 Release Candidate
author: azu
layout: post
itemUrl: 'https://deno.com/blog/v2.0-release-candidate'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/09/index.json'
date: '2024-09-22T11:55:04Z'
tags:
  - deno
  - ReleaseNote
---
Deno v2.0 RCリリース。
グローバルな`window`を削除/`process`を追加、`deno add`で`jsr:`と`npm:`の識別子を指定して追加できるように、パーミッションの指定に関する挙動の変更。
WebGPU/`Deno.dlopen()`/`Deno.createHttpClient()`がStableに、非推奨なAPIやコマンドの削除。
`deno run`でCommonJSを実行可能に、Top Level awaitを含まないESMを`require()`で読み込めるように、Node.jsとの互換性をの改善。
`deno test --doc`でDocTestをサポート、TypeScript 5.6へアップデートなど
