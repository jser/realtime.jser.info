---
title: >-
  Oxidizing Source Maps with Rust and WebAssembly – Mozilla Hacks – the Web
  developer blog
author: azu
layout: post
itemUrl: >-
  https://hacks.mozilla.org/2018/01/oxidizing-source-maps-with-rust-and-webassembly/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/01/index.json'
date: '2018-01-21T10:33:56Z'
tags:
  - sourcemap
  - WebAssembly
  - article
  - JavaScript
  - library
  - Rust
relatedLinks:
  - title: >-
      Use WebAssembly to speed up SourceMapConsumer by fitzgen · Pull Request
      #306 · mozilla/source-map
    url: 'https://github.com/mozilla/source-map/pull/306'
---
Source Mapパーサ、ジェネレーターをRust + WebAssemblyに書き換えた話し。
Rustで書いてwasmに変換して動作させることで、処理時間や処理の安定性が向上したという話
