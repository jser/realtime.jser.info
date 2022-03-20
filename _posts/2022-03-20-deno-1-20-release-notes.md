---
title: Deno 1.20 Release Notes
author: azu
layout: post
itemUrl: 'https://deno.com/blog/v1.20'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/03/index.json'
date: '2022-03-20T15:19:00Z'
tags:
  - deno
  - ReleaseNote
---
Deno 1.20リリース。
パフォーマンスの改善、`Accept-Encoding`を見て自動的にHTTP Response Bodyを圧縮するように。
`deno bench`コマンド、`deno task`コマンド、`deno.json`が`importMap`オプションをサポート。
`deno test`に`--trace-ops`フラグをつけた時のみデバッグ用の詳細な情報を表示するように変更。
破壊的な変更として、WorkerとTestに対してパーミッションのデフォルト値が&quot;inherit&quot;だったのを&quot;none&quot;に変更など
