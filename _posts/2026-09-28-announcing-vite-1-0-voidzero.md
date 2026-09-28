---
title: Announcing Vite+ 1.0 | VoidZero
author: azu
layout: post
itemUrl: 'https://voidzero.dev/posts/announcing-vite-plus-1-0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/09/index.json'
date: '2026-09-28T15:00:09Z'
tags:
  - vite
  - Tools
  - CLI
  - ReleaseNote
relatedLinks:
  - title: 'Release vite-plus v1.0.0: Vite+ 1.0 is stable · voidzero-dev/vite-plus'
    url: 'https://github.com/voidzero-dev/vite-plus/releases/tag/v1.0.0'
---
Vite+ 1.0リリース。
BetaからはGitLab CI/CD向け`setup-vp`、HomebrewとDockerイメージ、`vp hooks`/`vp staged`などを追加。
`vp test`と`vite-plus/test*`がVitest 5.0.1へ移行、CLIのNode.jsサポート範囲を変更。
`oxlint`/`oxfmt`の実行ファイルラッパーを削除し、`vp lint --lsp`/`vp fmt --lsp`を使う形へ変更。
`vp migrate`によるVitest 5移行、npm provenance検証、`vp add --offline`/`--frozen-lockfile`のサポートなど。
