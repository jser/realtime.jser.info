---
title: Release v15.0.0 · sindresorhus/got
author: azu
layout: post
itemUrl: 'https://github.com/sindresorhus/got/releases/tag/v15.0.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/04/index.json'
date: '2026-04-02T00:50:58Z'
tags:
  - nodejs
  - HTTP
  - library
  - ReleaseNote
---
Got v15.0.0リリース。
Node.js 22未満のサポートを削除、
`promise.cancel()`を削除しAbortControllerの`signal`オプションに移行、`isStream`オプションの削除。
`responseType: &#039;buffer&#039;`が`Buffer`の代わりに`Uint8Array`を返すように変更。
ネイティブのFormData APIを利用するように変更、`strictContentLength`のデフォルトを`true`に変更。
RFC 9110に準拠し300/304レスポンスの自動リダイレクトを廃止など
