---
title: Electron 42 | Electron
author: azu
layout: post
itemUrl: 'https://www.electronjs.org/blog/electron-42-0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/05/index.json'
date: '2026-05-09T03:30:10Z'
tags:
  - Electron
  - ReleaseNote
---
Electron 42リリース。
Chromium 148/Node.js 24.15.0/V8 14.8へアップデート。
macOSの通知APIが`UNNotification` APIに変更されコード署名が必須に、`postinstall`でElectronバイナリをダウンロードする挙動を削除。`Session.clearStorageData()`から`quotas`オブジェクトを削除。
`view.setBounds()`のアニメーション対応、`view.setBackgroundBlur()`によるネイティブ背景ぼかしのサポート。
macOSでの`Notification.getHistory()`、`globalShortcut.setSuspended()`、ヒーププロファイリングのサポートなど。
