---
title: Release v3.0.5 · vitest-dev/vitest
author: azu
layout: post
itemUrl: 'https://github.com/vitest-dev/vitest/releases/tag/v3.0.5'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2025/02/index.json'
date: '2025-02-19T00:56:47Z'
tags:
  - vite
  - security
  - ReleaseNote
---
vitest v3.0.5リリース。
Vitest UIのAPIサーバはリクエストのOriginチェックをしていなかったため、罠サイトへのアクセス時にホストマシンで任意のコード実行ができるRCEの脆弱性の修正が含まれている。
