---
title: Mofi - Snappy UIs With WebAssembly and Web Workers
author: azu
layout: post
itemUrl: 'https://mofi.loud.red/blog/wasm-and-workers'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/09/index.json'
date: '2023-09-04T10:02:46Z'
tags:
  - WebAssembly
  - webworker
  - article
  - JavaScript
---
WebAssemblyでの処理をWebWorkerの中で動かし、メインスレッドをブロックせずに処理を行うという話。
CPUのコア数を超えてWorkerを増やすと問題があるため、ワーカープールを作成しWorker数を制御している。またWorkerから進捗状況をメッセージングする方法についてなど
