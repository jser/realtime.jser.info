---
title: Announcing TypeScript 4.8 - TypeScript
author: azu
layout: post
itemUrl: 'https://devblogs.microsoft.com/typescript/announcing-typescript-4-8/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/08/index.json'
date: '2022-08-27T15:57:05Z'
tags:
  - TypeScript
  - ReleaseNote
---
TypeScript 4.8リリース。
`strictNullChecks`が有効時に`unknown`は`{} | null | undefined`と同様になり関連するコントロールフロー分析の改善、Template String Typesでの`infer`の改善。 `--build`/`-watch`/`--incremental`におけるビルドパフォーマンスの改善、オブジェクトリテラルや配列リテラルを`==`や`===`で比較した場合にエラーとなるように。
Binding patternの型推論の改善、`--watch`の安定性の改善など
