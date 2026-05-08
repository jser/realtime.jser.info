---
title: Node.js — Node.js 26.1.0 (Current)
author: azu
layout: post
itemUrl: 'https://nodejs.org/en/blog/release/v26.1.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/05/index.json'
date: '2026-05-08T00:31:00Z'
tags:
  - nodejs
  - ReleaseNote
---
Node.js 26.1.0リリース。
実験的な`node:ffi`モジュールを追加し、`--experimental-ffi`フラグで動的ライブラリの読み込みとネイティブシンボルの呼び出しに対応。
`crypto.randomUUIDv7()`の追加、`crypto.diffieHellman()`がキーデータを受け入れるように変更。
`fs.stat()`に`signal`オプションを追加、`statfs`が`frsize`フィールドを公開。
HTTPの`IncomingMessage`に`req.signal`を追加、`Buffer`の`indexOf()`/`lastIndexOf()`に`end`パラメータを追加。
テストランナーにテスト順序のランダム化や`AbortSignal.timeout`のモックタイマー対応を追加、`util.styleText()`が16進数カラーをサポートなど
