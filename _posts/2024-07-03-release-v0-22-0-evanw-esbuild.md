---
title: Release v0.22.0 · evanw/esbuild
author: azu
layout: post
itemUrl: 'https://github.com/evanw/esbuild/releases/tag/v0.22.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/07/index.json'
date: '2024-07-03T00:45:30Z'
tags:
  - esbuild
  - ReleaseNote
relatedLinks:
  - title: Release v0.23.0 · evanw/esbuild
    url: 'https://github.com/evanw/esbuild/releases/tag/v0.23.0'
---
esbuild v0.22.0リリース。
`--platform=node`を指定した時に`--package=external`をデフォルトにしたが、AWS CDKなどで問題が起きたため0.23.0では元の挙動へとrevertされている。
Windows7,8など古いOSのサポート終了、`es2024`のサポート、`@esbuild/wasi-preview1`パッケージの公開など
