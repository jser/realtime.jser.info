---
title: Release pnpm 11 · pnpm/pnpm
author: azu
layout: post
itemUrl: 'https://github.com/pnpm/pnpm/releases/tag/v11.0.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/04/index.json'
date: '2026-04-29T00:53:06Z'
tags:
  - pnpm
  - ReleaseNote
---
pnpm v11.0.0リリース。
Pure ESMパッケージへの移行、Node.js 18-21のサポートを終了。
`.npmrc`は認証/レジストリ設定のみに限定し、その他の設定は`pnpm-workspace.yaml`へ移行。
`minimumReleaseAge`のデフォルトを1日に変更、`allowBuilds`に設定を統一、ストアのインデックスにSQLiteを使用するように変更。
npm CLIへの依存を排除して`pnpm publish`/`pnpm login`/`pnpm audit`をネイティブ実装に変更。
`pnpm ci`/`pnpm sbom`/`pnpm clean`/`npm pack-app`コマンドの追加。
