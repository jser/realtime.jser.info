---
title: Release v2.0.0 Beta - The &lt;Suspense&gt; is Over · solidjs/solid
author: azu
layout: post
itemUrl: 'https://github.com/solidjs/solid/releases/tag/v2.0.0-beta.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/03/index.json'
date: '2026-03-06T06:45:46Z'
tags:
  - Solid
  - JavaScript
  - ReleaseNote
  - library
---
Solid v2.0.0 Betaリリース。
非同期処理はファーストクラスとして、computationsがPromiseやasync iterablesを返せるようになった。
`&lt;Loading&gt;`コンポーネントや`isPending`によるPending状態の追跡、`action()`と`createOptimistic`によるOptimistic Updateの仕組みを追加。
`&lt;Index&gt;`を`&lt;For keyed={false}&gt;`へ変更、`createEffect`のcompute/applyフェーズの分離、`use:`ディレクティブの削除など。
