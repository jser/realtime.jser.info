---
title: Announcing TypeScript 5.0 RC - TypeScript
author: azu
layout: post
itemUrl: 'https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-rc/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/03/index.json'
date: '2023-03-03T14:41:49Z'
tags:
  - TypeScript
  - ReleaseNote
---
TypeScript 5.0 RCリリース。
ECMAScript Stage 3のDecoratorを実装、`const` type perameterの追加、`tsconfig.json`で複数の`extends`に対応、enumとunion型の改善。
`--moduleResolution bundler`の追加と関連するオプションの追加、`exports`フィールのConditionを指定できる`--customConditions`の追加。
`import`時に`type`修飾子を削除しそれ以外を残す`--verbatimModuleSyntax`オプションの追加、JSDocで`@satisfies`をサポートなど。
また、TypeScriptのコードベースをnamespaceからmoudleに移行し、パフォーマンス/メモリ/パッケージサイズの改善。
`--target ES3`や`--out`などのオプションを非推奨に変更し、`--forceConsistentCasingInFileNames`をデフォルトでtrueに変更するといった変更も含まれている
