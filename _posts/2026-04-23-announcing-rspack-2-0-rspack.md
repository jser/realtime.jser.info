---
title: Announcing Rspack 2.0 - Rspack
author: azu
layout: post
itemUrl: 'https://rspack.rs/blog/announcing-2-0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/04/index.json'
date: '2026-04-23T02:52:02Z'
tags:
  - rspack
  - ReleaseNote
---
Rspack 2.0リリース。
`@rspack/core`などのコアパッケージをPure ESMパッケージへ移行、CommonJSビルドを削除。
`@rspack/dev-server`の依存数の削減、トップレベルの`target`オプションがLoaderやMinimizer Pluginに自動継承されるように変更。
ビルドパフォーマンスの改善、CommonJSの`require`分割代入やプロパティアクセスのTree Shakingを改善。
`/*#__NO_SIDE_EFFECTS__*/`アノテーション、Module Federationの共有依存のExportレベルでのTree Shakingに対応。
`import.meta`/`import defer`などをそのまま出力できるように、`library.type`に`modern-module&#039;`を追加。
React Server Componentsの実験的サポート、`#/`サブパスエイリアスをサポート、`swc-loader`の`detectSyntax`オプションの追加など
