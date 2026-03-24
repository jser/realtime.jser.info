---
title: Announcing TypeScript 6.0 - TypeScript
author: azu
layout: post
itemUrl: 'https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/03/index.json'
date: '2026-03-24T11:20:53Z'
tags:
  - TypeScript
  - ReleaseNote
---
TypeScript 6.0リリース。
現在のJavaScriptコードベースによる最後のリリースで、Goで書き直されたTypeScript 7.0への移行を準備するリリースとなる。
`strict`がデフォルトで`true`に、`target`のデフォルトが`es2025`に、`module`のデフォルトが`esnext`に変更。
`target: es5`、`--moduleResolution node`(node10)、`--outFile`、`--esModuleInterop false`などが非推奨となりエラーに変更。
`es2025`ターゲットの追加、Temporal APIの型定義の追加、Map/WeakMapの`getOrInsert()`/`getOrInsertComputed()`メソッドの追加。
Node.jsのSubpath Importsの`#/`のサポート、`--moduleResolution bundler`と`--module commonjs`の組み合わせをサポート。
TypeScript 7.0の型順序に合わせる`--stableTypeOrdering`フラグの追加など
