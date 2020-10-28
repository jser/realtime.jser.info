---
title: Release v1.5.0 · denoland/deno
author: azu
layout: post
itemUrl: 'https://github.com/denoland/deno/releases/tag/v1.5.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/10/index.json'
date: '2020-10-28T15:10:22Z'
tags:
  - deno
  - ReleaseNote
relatedLinks:
  - title: swc
    url: 'https://github.com/swc-project/swc'
  - title: 'TypeScript compiler in Rust · Issue #5432 · denoland/deno'
    url: 'https://github.com/denoland/deno/issues/5432#issuecomment-716890189'
  - title: Deno 1.5 Release Notes
    url: 'https://deno.land/posts/v1.5'
---
Deno 1.5.0リリース。
破壊的な変更として`isolatedModules`をデフォルトで有効化されている。
`deno bundle --no-check`のサポート、型チェックしない場合はswcを使うことで高速化、`alert`/`confirm`/`promp`のサポートなど
