---
title: TypeScript 4.9のas const satisfiesが便利。型チェックとwidening防止を同時に行う
author: azu
layout: post
itemUrl: 'https://zenn.dev/moneyforward/articles/typescript-as-const-satisfies'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/12/index.json'
date: '2022-12-22T12:57:17Z'
tags:
  - TypeScript
  - article
---
wideningを避ける`as const`と型推論の結果を保つ`satisfiers`演算子を組み合わせた、`as const satisfies`について
