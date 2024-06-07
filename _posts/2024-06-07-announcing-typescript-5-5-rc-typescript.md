---
title: Announcing TypeScript 5.5 RC - TypeScript
author: azu
layout: post
itemUrl: 'https://devblogs.microsoft.com/typescript/announcing-typescript-5-5-rc/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/06/index.json'
date: '2024-06-07T15:10:51Z'
tags:
  - TypeScript
  - ReleaseNote
---
TypeScript 5.5 RCリリース。
関数からtype predicatesを推論できるようになり、`Array.prototype.filter`などでの絞り込みが簡潔に書けるように。
Stage 3のSet Methodsをサポート。
JSDocで`@import {foo} from &quot;foo&quot;`をサポート、正規表現の基本的な構文チェックをサポート、`isolatedDeclarations`をサポート。
設定ファイル内で`${configDir}`のテンプレート値をサポート。
`typescript`パッケージのサイズを削減、Named Importをサポート、`transpileDeclaration` APIの追加。
`transpileModule`と`transpileDeclaration`でのビルド時間を改善。
`out`や`target: ES3`などの非推奨となっていたオプションが無効化され、`ignoreDeprecations`オプションを指定しないと利用できなくなる変更など
