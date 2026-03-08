---
title: Announcing TypeScript 6.0 RC - TypeScript
author: azu
layout: post
itemUrl: 'https://devblogs.microsoft.com/typescript/announcing-typescript-6-0-rc/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/03/index.json'
date: '2026-03-08T04:35:02Z'
tags:
  - TypeScript
  - ReleaseNote
---
TypeScript 6.0 RCリリース。
TypeScript 7(Go言語ベース)への移行を見据えたリリースで、多くのデフォルト設定の変更や非推奨化が含まれる。
Betaからの変更として `import ... assert {...}`の廃止が延期された。
`strict`がデフォルトで`true`に変更、`module`のデフォルトが`esnext`に変更、`target`のデフォルトが`es2025`に変更、`types`のデフォルトが`[]`に変更。
`target: es5`/`--moduleResolution node10`/`--module amd|umd|system`/`--outFile`などを非推奨化。
ES2025の`RegExp.escape`やTemporalの型定義を追加、`lib.dom`に`dom.iterable`と`dom.asynciterable`を統合。
`this`を使わない関数のcontext sensitivityの改善、`#/`で始まるsubpath importsのサポートを追加。
`--moduleResolution bundler`と`--module commonjs`の組み合わせが可能に。
TypeScript 7への移行を補助する`--stableTypeOrdering`フラグの追加など。
