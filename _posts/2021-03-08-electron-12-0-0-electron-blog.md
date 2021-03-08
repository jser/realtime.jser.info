---
title: Electron 12.0.0 | Electron Blog
author: azu
layout: post
itemUrl: 'https://www.electronjs.org/blog/electron-12-0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/03/index.json'
date: '2021-03-08T13:16:33Z'
tags:
  - Electron
  - ReleaseNote
relatedLinks:
  - title: >-
      electron/remote: Bridge JavaScript objects from the main process to the
      renderer process in Electron.
    url: 'https://github.com/electron/remote'
---
Electron 12.0.0リリース。
Chromium 89、V8 8.9、Node.js 14.16へアップデート。
`exposeInMainWorld`がオブジェクト以外をサポート、`webFrameMain` APIの追加など。
`contextIsolation`と`worldSafeExecuteJavaScript`がデフォルトで`true`に変更、`remote`モジュールが非推奨となり`@electron/remote`外部モジュール化
