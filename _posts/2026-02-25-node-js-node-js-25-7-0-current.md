---
title: Node.js — Node.js 25.7.0 (Current)
author: azu
layout: post
itemUrl: 'https://nodejs.org/en/blog/release/v25.7.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/02/index.json'
date: '2026-02-25T22:15:02Z'
tags:
  - nodejs
  - ReleaseNote
---
Node v25.7.0リリース。
`node:sqlite`モジュールがRelease Candidate(RC)に昇格。
Single Executable Applications(SEA)でESMエントリーポイントをサポート、
HTTP/2でHTTP/1へのフォールバック設定として`http1Options`を追加。
`Duplex.toWeb()`のtypeオプションを`readableType`にリネーム、`node:test`でSIGINT時に中断されたテストを表示するように。
`fs.stat`に`throwIfNoEntry`オプションの追加、`zlib`でBrotli圧縮辞書のサポートなど。
