---
title: Release electron v19.0.0 · electron/electron
author: azu
layout: post
itemUrl: 'https://github.com/electron/electron/releases/tag/v19.0.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/05/index.json'
date: '2022-05-24T02:16:56Z'
tags:
  - Electron
  - ReleaseNote
---
Electron v19.0.0リリース。
Chromium 102、V8 10.2、Node.js 16.14.2にアップデート。
Electron 20からpreload scriptsは自動的にsandboxで実行される。
そのため、`nodeIntegration: true` かつ `sandbox`が無指定の場合に警告が出るようになった。
