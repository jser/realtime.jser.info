---
title: Announcing TypeScript 4.7 - TypeScript
author: azu
layout: post
itemUrl: 'https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/05/index.json'
date: '2022-05-26T13:30:00Z'
tags:
  - TypeScript
  - ReleaseNote
relatedLinks:
  - title: >-
      TypeScript 4.7 と Native Node.js ESM | by Yosuke Kurami | May, 2022 |
      Medium
    url: >-
      https://quramy.medium.com/typescript-4-7-%E3%81%A8-native-node-js-esm-189753a19ba8
---
TypeScript 4.7リリース。
Node.jsのECMAScript Moduleをサポート、`.mts`/`.cts`のサポート。
`moduleDetection`オプションの追加。 Compuatedプロパティに対するコントロールフロー解析の改善、オブジェクトにおける関数の型推論の改善。
Genericsの型を指定したaliasを定義できる Instantiation Expressionsをサポート、inferに対するextendsでの推論条件の追加をサポート。
型が共変(in)/反変(out)/不変(in out)なのかを指定できるアノテーションを追加、モジュール解決時の探索方法をカスタマイズする`moduleSuffixes`オプションの追加。
`import type`/`import()`/Reference Commentでresolution-modeを指定できるようになるなど
