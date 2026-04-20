---
title: 'endevco/aube: A fast Node.js package manager'
author: azu
layout: post
itemUrl: 'https://github.com/endevco/aube'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/04/index.json'
date: '2026-04-20T02:54:47Z'
tags:
  - nodejs
  - package
  - Rust
  - Tools
---
Rustで書かれたNode.js向けのパッケージマネージャー。
`pnpm-lock.yaml`/`package-lock.json`/`npm-shrinkwrap.json`/`yarn.lock`/`bun.lock`などの既存のロックファイル形式の読み書きに対応している。
グローバルなcontent-addressable storeによるパッケージファイルの共有、最小リリース期間やライフサイクルスクリプトの承認制御などのセキュリティ機能を持つ。
