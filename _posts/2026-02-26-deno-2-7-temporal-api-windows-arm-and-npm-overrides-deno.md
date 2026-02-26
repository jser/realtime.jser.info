---
title: 'Deno 2.7: Temporal API, Windows ARM, and npm overrides | Deno'
author: azu
layout: post
itemUrl: 'https://deno.com/blog/v2.7'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/02/index.json'
date: '2026-02-26T12:49:30Z'
tags:
  - deno
  - ReleaseNote
---
Deno v2.7リリース。
Temporal APIがstableに変更、Windows ARM(aarch64)のサポート。
`package.json`の`overrides`フィールドのサポート、`deno install --compile`の追加。
`CompressionStream`/`DecompressionStream`がBrotliをサポート、Web Crypto APIでSHA3アルゴリズムのサポート。
`deno task`でglobstar(`**`)と`pipefail`のサポート、`deno compile --self-extracting`オプションの追加。
Web WorkerのDevToolsデバッグに対応、OpenTelemetryでDeno Cronの自動計装に対応。
Node.js互換性の改善として`node:worker_threads`/`node:child_process`/`node:zlib`(Zstd)などの修正、V8 14.5へのアップデートなど。
