---
title: Release v0.20.0 · nodejs/corepack
author: azu
layout: post
itemUrl: 'https://github.com/nodejs/corepack/releases/tag/v0.20.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/08/index.json'
date: '2023-08-30T12:57:42Z'
tags:
  - nodejs
  - Tools
  - ReleaseNote
---
corepack 0.20.0リリース。
CLIのコマンドのほとんどが変更された。古いコマンドも互換性のために維持されている。

- `corepack prepare foo@1.2.3` → `corepack install -g foo@1.2.3`
- `corepack prepare foo@1.2.3 --activate` → `corepack use -g foo@1.2.3`
- `corepack hydrate path/to/archive.gz` → `corepack install -g path/to/archive.gz`
- `corepack hydrate path/to/archive.gz --activate` → `corepack use -g path/to/archive.gz`
- `corepack prepare -o ...` → `corepack pack -g`
