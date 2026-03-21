---
title: Release pnpm 11 Beta 0 · pnpm/pnpm
author: azu
layout: post
itemUrl: 'https://github.com/pnpm/pnpm/releases/tag/v11.0.0-beta.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/03/index.json'
date: '2026-03-21T02:28:41Z'
tags:
  - pnpm
  - ReleaseNote
---
pnpm v11.0.0-beta.0リリース。
Pure ESMパッケージへの移行、Node.js 18-21のサポートを終了。
`package.json`の`pnpm`フィールドの設定を`pnpm-workspace.yaml`へ移行、`pnpm server`コマンドの削除、`pnpm link`コマンドの変更など多くの破壊的変更を含む。
パッケージメタデータの保存にSQLiteを使用するように変更、ストアバージョンの更新。
`pnpm clean`コマンドで`node_modules`の削除、`pnpm audit --fix=update`でlockfileの更新による脆弱性の修正に対応。
`config.yaml`のサポート、PnpmfileでESMフォーマット(`.pnpmfile.mjs`)をサポートなど。
