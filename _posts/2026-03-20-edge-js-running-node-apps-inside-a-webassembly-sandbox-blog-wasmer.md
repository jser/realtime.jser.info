---
title: 'Edge.js: Running Node apps inside a WebAssembly Sandbox · Blog · Wasmer'
author: azu
layout: post
itemUrl: 'https://wasmer.io/posts/edgejs-safe-nodejs-using-wasm-sandbox'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/03/index.json'
date: '2026-03-20T03:04:28Z'
tags:
  - WebAssembly
  - nodejs
  - article
---
WebAssemblyのSandboxでNode.js互換のアプリケーションを実行できるRuntime。
Node.js v24互換で、Next.jsやAstroなどのフレームワークを動作させることができる。
OSシステムコールとネイティブコードのみをWASIX経由でサンドボックス化し、JavaScriptエンジン自体はネイティブで実行するアーキテクチャとなっている。
V8、JavaScriptCore、QuickJSなど複数のJSエンジンに対応している。
