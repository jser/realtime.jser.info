---
title: >-
  Release v2.0.1: Aube&#039;s own global home, leaner resolver, and dramatically
  lower install memory · jdx/aube
author: azu
layout: post
itemUrl: 'https://github.com/jdx/aube/releases/tag/v2.0.1'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/09/index.json'
date: '2026-09-01T14:11:02Z'
tags:
  - nodejs
  - package
  - Rust
  - Tools
---
Aube v2リリース。
`aube add -g`のインストール先をpnpmのディレクトリからAubeのdata rootへ変更。
`lowest-direct`を`ResolutionMode::LowestDirect`として公開APIに追加、`aube store prune --dry-run --json`の構造化出力を追加。
`aube pack`/`aube publish`での`catalog:`解決など。
