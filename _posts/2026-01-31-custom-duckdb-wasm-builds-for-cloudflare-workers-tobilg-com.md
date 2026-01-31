---
title: Custom DuckDB Wasm builds for Cloudflare Workers - tobilg.com
author: azu
layout: post
itemUrl: 'https://tobilg.com/posts/custom-duckdb-wasm-builds-for-cloudflare-workers/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/01/index.json'
date: '2026-01-31T20:25:29Z'
tags:
  - cloudflare
  - WebAssembly
  - duckdb
  - article
relatedLinks:
  - title: >-
      tobilg/ducklings: A minimal DuckDB Wasm build for browsers and serverless
      environments like Cloudflare Workers
    url: 'https://github.com/tobilg/ducklings'
---
Cloudflare Workers上でDuckDB WebAssemblyを動作させるためのカスタムビルドについて。
DuckDBの既存のWasmビルドはブラウザ向けに設計されており、Workersの非同期環境では動作しないため、EmscriptenのAsyncifyを使った解決策を紹介している。
@ducklings/workersパッケージを使うことで、Parquet/JSON/httpfs拡張機能を含むDuckDB Wasmをエッジで実行できる。
