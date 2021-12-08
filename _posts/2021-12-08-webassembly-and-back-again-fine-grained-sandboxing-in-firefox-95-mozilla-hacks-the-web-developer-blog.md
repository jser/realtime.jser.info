---
title: >-
  WebAssembly and Back Again: Fine-Grained Sandboxing in Firefox 95 - Mozilla
  Hacks - the Web developer blog
author: azu
layout: post
itemUrl: >-
  https://hacks.mozilla.org/2021/12/webassembly-and-back-again-fine-grained-sandboxing-in-firefox-95/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/12/index.json'
date: '2021-12-08T03:53:01Z'
tags:
  - WebAssembly
  - security
  - article
---
Firefox 95に含まれるRLBoxというWebAssemblyを使ったSandboxの仕組みについて。
プロセスの分離はオーバヘッドが大きくなりやすい。分離したいコードをWasmに変換し、Wasmをwasm2cでC言語に変換してネイティブコードへ変換し利用する。
Wasmを経由することで指定外のメモリ空間にアクセスできないことを保証している。
