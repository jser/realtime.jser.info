---
title: Announcing TypeScript 4.7 Beta - TypeScript
author: azu
layout: post
itemUrl: 'https://devblogs.microsoft.com/typescript/announcing-typescript-4-7-beta/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/04/index.json'
date: '2022-04-10T11:36:40Z'
tags:
  - TypeScript
  - ReleaseNote
---
TypeScript 4.7 betaリリース。
Node.jsのECMAScript Moduleサポートを再び有効化、`moduleDetection`オプションの追加。
Compuatedプロパティに対するコントロールフロー解析の改善、オブジェクトにおける関数の型推論の改善。Genericsの型を指定したaliasを定義できる Instantiation Expressionsをサポート。
`infer`に対する`extends`での推論条件の追加をサポート、型が共変(`in`)/反変(`out`)/不変(`in out`)なのかを指定できるアノテーションを追加。
モジュール解決持の探索方法をカスタマイズする`moduleSuffixes`オプションの追加、`import type`とReference Commentで`resolution-mode`を指定できるように。
