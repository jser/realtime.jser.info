---
title: Release pnpm 11 RC 0 · pnpm/pnpm
author: azu
layout: post
itemUrl: 'https://github.com/pnpm/pnpm/releases/tag/v11.0.0-rc.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/04/index.json'
date: '2026-04-12T02:23:32Z'
tags:
  - pnpm
  - ReleaseNote
---
pnpm v11.0.0 rc.0リリース。
Pure ESMパッケージへの移行、Node.js 18-21のサポートを終了。
`.npmrc`は認証/レジストリ設定のみに限定し、その他の設定は`pnpm-workspace.yaml`へ移行、`pnpm server`コマンドの削除など多くの破壊的変更を含む。
`pnpm ci`コマンドの追加、`pnpm sbom`でのSBOM生成に対応。
`minimumReleaseAge`のデフォルトを1日に設定、`blockExoticSubdeps`のデフォルトを`true`に変更などサプライチェーンセキュリティの強化。
ストアのインデックスにSQLiteを使用するように変更、`undici`の採用によるHTTPリクエストの改善など。
