---
title: Vite 8.0 is out! | Vite (main branch)
author: azu
layout: post
itemUrl: 'https://main.vite.dev/blog/announcing-vite8'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/03/index.json'
date: '2026-03-14T13:49:41Z'
tags:
  - Vite
  - Rust
  - ReleaseNote
  - bundler
---
Vite 8.0リリース。
esbuild + Rollupの二重バンドラー構成をRustベースの統合バンドラーであるRolldownに置き換え。
lightningcssが標準の依存関係に変更。
ビルトインのDevtools、TypeScriptのパスエイリアス解決(`resolve.tsconfigPaths`)のサポート。
WebAssemblyのSSRサポート、ブラウザのコンソールログをdevサーバーのターミナルに転送する`server.forwardConsole`の追加など。
