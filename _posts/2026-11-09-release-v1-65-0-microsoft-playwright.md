---
title: Release v1.65.0 · microsoft/playwright
author: azu
layout: post
itemUrl: 'https://github.com/microsoft/playwright/releases/tag/v1.65.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/11/index.json'
date: '2026-11-09T00:19:29Z'
tags:
  - playwright
  - testing
  - ReleaseNote
---
Playwright v1.65.0リリース。
破壊的変更として、TypeScriptのクラスフィールドが`useDefineForClassFields`に従うように変更、クリックなどの操作で`inert`の解除を待つように変更。
Cookieの照合をRFC 6265に合わせ、`APIRequestContext`の`params`を既存のクエリに追記するように変更。
`bunx --bun playwright test`でBun上でのテスト実行に対応、`failures`レポーターと`onlyFailures`オプションを追加。
テストを単独で実行する`lock: &#039;-exclusive-&#039;`、`cdpSession.send()`の`timeout`/`signal`オプションを追加など
