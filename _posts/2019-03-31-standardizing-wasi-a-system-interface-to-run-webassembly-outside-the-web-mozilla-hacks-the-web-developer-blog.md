---
title: >-
  Standardizing WASI: A system interface to run WebAssembly outside the web -
  Mozilla Hacks - the Web developer blog
author: azu
layout: post
itemUrl: >-
  https://hacks.mozilla.org/2019/03/standardizing-wasi-a-webassembly-system-interface/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/03/index.json'
date: '2019-03-31T05:35:05Z'
tags:
  - WebAssembly
  - article
relatedLinks:
  - title: 'Announcing Lucet: Fastly’s native WebAssembly compiler and runtime'
    url: >-
      https://www.fastly.com/blog/announcing-lucet-fastly-native-webassembly-compiler-runtime
  - title: WASI
    url: 'https://wasi.dev/'
  - title: >-
      CraneStation/wasmtime: Standalone JIT-style runtime for WebAsssembly,
      using Cranelift
    url: 'https://github.com/CraneStation/wasmtime'
  - title: Introducing CloudABI
    url: 'https://cloudabi.org/'
---
ブラウザ以外でもWebAssemblyを実行するための標準化を行うWASIについて。
各プラットフォームでも動くポータブルなバイナリとプラグラムごとのサンドボックスセキュリティを原則にしたデザイン。
CloudABIのCapability-based securityを元にしたセキュリティモデルをもつ。
