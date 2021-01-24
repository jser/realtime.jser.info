---
title: Deno 1.7 Release Notes
author: azu
layout: post
itemUrl: 'https://deno.land/posts/v1.7'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/01/index.json'
date: '2021-01-24T13:31:32Z'
tags:
  - deno
  - ReleaseNote
relatedLinks:
  - title: Release v1.7.0 · denoland/deno
    url: 'https://github.com/denoland/deno/releases/tag/v1.7.0'
  - title: Deno 1.7.0 がリリースされたので新機能や変更点の紹介
    url: 'https://zenn.dev/magurotuna/articles/55575eb16ae422'
---
Deno 1.7リリース。
`deno compile`のサイズ改善とクロスコンパイルの対応、Data URLのimportをサポート、`deno fmt`のMarkdownサポート。
Steram APIをWHATWGに準拠するように修正、Web Workerに`permissions`でDeno独自のパーミッションを指定可能に。
`--location`フラグを使って相対URLのFetchに対応、FetchのリクエストbodyにStreamを指定可能になるなど。
破壊的な変更としてDeno APIsの変更やUnstable APIとして`Deno.resolveDns`のサポートが含まれる。
