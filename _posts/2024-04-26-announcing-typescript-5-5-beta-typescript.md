---
title: Announcing TypeScript 5.5 Beta - TypeScript
author: azu
layout: post
itemUrl: 'https://devblogs.microsoft.com/typescript/announcing-typescript-5-5-beta/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/04/index.json'
date: '2024-04-26T01:58:27Z'
tags:
  - TypeScript
  - ReleaseNote
relatedLinks:
  - title: 'The Making of a TypeScript Feature: Inferring Type Predicates'
    url: 'https://effectivetypescript.com/2024/04/16/inferring-a-type-predicate/'
---
TypeScript 5.5リリース。
関数からtype predicatesを推論できるようになり、`Array.prototype.filter`などでの絞り込みが簡潔に書けるように。
JSDocで`@import {foo} from &quot;foo&quot;`をサポート、正規表現の基本的な構文チェックをサポート、`isolatedDeclarations`をサポート。
設定ファイル内で`${configDir}`のテンプレート値をサポート。
`typescript`パッケージのサイズを削減、Named Importをサポート、`transpileDeclaration` APIの追加。
`out`や`target: ES3`などの非推奨となっていたオプションを削除など
