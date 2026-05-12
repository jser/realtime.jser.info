---
title: Release v1.60.0 · microsoft/playwright
author: azu
layout: post
itemUrl: 'https://github.com/microsoft/playwright/releases/tag/v1.60.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/05/index.json'
date: '2026-05-12T06:28:47Z'
tags:
  - playwright
  - ReleaseNote
---
playwright v1.60.0リリース。
破壊的な変更として、`Locator.ariaRef()`、bindingsの`handle`オプション、`videosPath`/`videoSize`などのdeprecatedなAPIを削除。
`tracing.startHar()`/`tracing.stopHar()`でHAR記録をサポート、外部からのドラッグ&amp;ドロップをシミュレートする`locator.drop()`の追加。
`expect(page).toMatchAriaSnapshot()`をPageに対して利用できるように、`boxes`オプションで境界ボックス情報を含められるように。
テストを中断する`test.abort()`、`browser.on(&#039;context&#039;)`イベントとBrowserContextのライフサイクルイベントの追加など
