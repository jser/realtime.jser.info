---
title: 'Deno 1.31: package.json support'
author: azu
layout: post
itemUrl: 'https://deno.com/blog/v1.31'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/02/index.json'
date: '2023-02-24T14:47:15Z'
tags:
  - deno
  - ReleaseNote
---
Deno v1.31リリース。
`package.json`をサポートし`scripts`や`dependencies`を扱えるように、Node-APIのサポートをStableに変更。
DenoのランタイムにNode.jsの互換レイヤーを同梱するように変更。
`deno bundle`コマンドを非推奨化、`deno fmt`のフラグから`--options-` prefixなしのオプション名を指定できるようになるなど
