---
title: >-
  tmikov/hermes-node: Node.js built-in module compatibility layer for the Hermes
  JS engine
author: azu
layout: post
itemUrl: 'https://github.com/tmikov/hermes-node'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/05/index.json'
date: '2026-05-17T02:46:27Z'
tags:
  - nodejs
  - JavaScript
  - TypeScript
  - library
---
HermesをベースにしたNode.js互換のJavaScript/TypeScriptランタイム。
TypeScriptファイルを直接実行でき、Chrome DevToolsプロトコルに対応したデバッガを内蔵している。
`fs`/`http`/`net`/`path`/`stream`などのNode.jsコアモジュールは、Node.js内部のJS実装をそのまま利用する。
