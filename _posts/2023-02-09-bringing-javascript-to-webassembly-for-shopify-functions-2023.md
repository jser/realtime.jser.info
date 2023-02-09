---
title: Bringing Javascript to WebAssembly for Shopify Functions (2023)
author: azu
layout: post
itemUrl: 'https://shopify.engineering/javascript-in-webassembly-for-shopify-functions'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/02/index.json'
date: '2023-02-09T14:57:19Z'
tags:
  - WebAssembly
  - JavaScript
  - article
relatedLinks:
  - title: 'Shopify/javy: JS to WebAssembly toolchain'
    url: 'https://github.com/Shopify/javy'
---
JavaScriptをWasmにして実行する仕組みについて。
QuickJSを使いJavaScriptをByteCodeにした`script.wasm`を作成し、`QuickJS.wasm`と動的にリンクして大部分を共有している。

Shopify Functionで利用されるが、非同期処理の制限や5ms未満での実行制限がある。現在はRustで作成したWasmより3枚ていど遅いが、今後はSpiderMonkeyの利用やJITについてやっていく。
