---
title: Release v0.25.0 · nodejs/corepack
author: azu
layout: post
itemUrl: 'https://github.com/nodejs/corepack/releases/tag/v0.25.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/02/index.json'
date: '2024-02-20T08:45:22Z'
tags:
  - nodejs
  - tool
  - ReleaseNote
---
corepack v0.25.0リリース。
内部的にNode.jsのBuilt-in `fetch`を使うように、`corepack cache {clean,clear}`を追加。
`COREPACK_ENABLE_UNSAFE_CUSTOM_URLS=1`のフラグが有効な場合に、`packageManager`にカスタムURLを指定できるように。
`COREPACK_ENABLE_DOWNLOAD_PROMPT=1`でキャッシュにないpackage managerをダウンロードする際にプロンプトを表示できるように。
