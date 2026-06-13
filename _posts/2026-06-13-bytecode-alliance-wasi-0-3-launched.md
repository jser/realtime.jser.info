---
title: Bytecode Alliance — WASI 0.3 Launched
author: azu
layout: post
itemUrl: 'https://bytecodealliance.org/articles/WASI-0.3'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/06/index.json'
date: '2026-06-13T01:20:39Z'
tags:
  - WebAssembly
  - ReleaseNote
---
WASI 0.3がリリース。
WebAssembly Component Modelのネイティブ機能として非同期処理が組み込まれ、`stream&lt;T&gt;`/`future&lt;T&gt;`/`async`がCanonical ABIに追加された。
WASI 0.2では各コンポーネントが独自のイベントループを持つ必要があったが、ホストが共有イベントループを管理する設計へと変更された。
従来の`start-foo`/`finish-foo`/`subscribe`パターンが`async func`に置き換わり、ストリームのエラーハンドリングも独立した`future`で扱えるようになった。
