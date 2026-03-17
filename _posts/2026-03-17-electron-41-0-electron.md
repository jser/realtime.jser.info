---
title: Electron 41.0 | Electron
author: azu
layout: post
itemUrl: 'https://www.electronjs.org/blog/electron-41-0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/03/index.json'
date: '2026-03-17T14:14:18Z'
tags:
  - Electron
  - ReleaseNote
---
Electron 41.0リリース。
Chromium 146、Node.js v24.14.0、V8 14.6へアップグレード。
PDFの描画がout-of-process iframeを使った同一WebContents内での描画に変更。
Cookieの`changed`イベントに`inserted`などの変更理由を追加。
ASARの整合性チェックでダイジェストのサポート、Waylandでのフレームレスウィンドウのドロップシャドウとリサイズ境界の改善。
MSIX auto updaterの互換性を追加、macOS向け`--disable-geolocation`フラグの追加。
WebSocket認証を`login`イベントで処理できるように、`webPreferences.focusOnNavigation`オプションの追加など。
