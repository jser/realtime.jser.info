---
title: Release v5.30.0 · webpack/webpack
author: azu
layout: post
itemUrl: 'https://github.com/webpack/webpack/releases/tag/v5.30.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/04/index.json'
date: '2021-04-02T12:56:49Z'
tags:
  - webpack
  - JavaScript
  - ReleaseNote
relatedLinks:
  - title: >-
      SourceMapDevTool plugin leaks memory in watch mode · Issue #12947 ·
      webpack/webpack
    url: 'https://github.com/webpack/webpack/issues/12947'
  - title: >-
      memory usage improvements, add GC support for memory cache, persistent
      cache only mode by sokra · Pull Request #12990 · webpack/webpack
    url: 'https://github.com/webpack/webpack/pull/12990'
---
webpack 5.30.0リリース。
`cache.type: &quot;memory&quot;`でwatch中に`[contenthash]`などを使うと、ファイル変更ごとにゴミがメモリに貯まる問題の改善。
`cache.maxGenerations`と`cache.maxAge`で不要となったキャッシュを削除できるように
