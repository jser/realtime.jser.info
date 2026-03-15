---
title: Announcing Vite+ Alpha | VoidZero
author: azu
layout: post
itemUrl: 'https://voidzero.dev/posts/announcing-vite-plus-alpha'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/03/index.json'
date: '2026-03-15T02:13:00Z'
tags:
  - vite
  - Rust
  - CLI
  - Tools
  - ReleaseNote
relatedLinks:
  - title: >-
      voidzero-dev/vite-plus: Vite+ is the unified toolchain and entry point for
      web development. It manages your runtime, package manager, and frontend
      toolchain in one place.
    url: 'https://github.com/voidzero-dev/vite-plus/tree/main'
---
Vite+ Alphaリリース。
Vite、Vitest、Rolldown、Oxlint、Oxfmtなどを統合したCLIツール。
`vp dev`/`vp build`/`vp test`/`vp check`などのコマンドで、開発サーバ、ビルド、テスト、Lint、フォーマットを1つのツールで実行できる。
`vp env`でのNode.jsバージョン管理、`vp run`でのmonorepoタスク実行とキャッシュ機能も提供する。
当初は商用版として検討されていたが、MITライセンスでオープンソースとして公開された。
