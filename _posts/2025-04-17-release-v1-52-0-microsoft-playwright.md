---
title: Release v1.52.0 · microsoft/playwright
author: azu
layout: post
itemUrl: 'https://github.com/microsoft/playwright/releases/tag/v1.52.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2025/04/index.json'
date: '2025-04-17T23:42:28Z'
tags:
  - playwright
  - ReleaseNote
---
playwright v1.52.0リリース。
破壊的な変更として`page.route()`で`?`はwildcardとして扱わないように変更、`route.continue()`で`Cookie`ヘッダを上書きできないように変更。
`expect(locator).toContainClass()`の追加、Aria Snapshotの更新。
プロジェクトごとに`workers`を設定できるように、`failOnFlakyTests`オプションの追加。

