---
title: >-
  PerryTS/perry: A native TypeScript compiler written in Rust. Compiles
  TypeScript directly to executables using SWC and LLVM.
author: azu
layout: post
itemUrl: 'https://github.com/PerryTS/perry'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/04/index.json'
date: '2026-04-19T05:48:59Z'
tags:
  - TypeScript
  - Rust
  - compiler
  - Tools
---
Rustで書かれたTypeScriptのネイティブコンパイラ。
SWCでTypeScriptをパースし、LLVMで実行ファイルへと直接コンパイルする。
macOS/Windows/Linux/iOS/Android向けのクロスコンパイルに対応し、ネイティブUIを扱うパッケージを用意している。
著名なnpmパッケージはRust実装のものへ差し替え、他のものはV8のRuntimeを使ったfallbackで対応している。
