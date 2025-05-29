---
title: New in Chrome 137  |  Blog  |  Chrome for Developers
author: azu
layout: post
itemUrl: 'https://developer.chrome.com/blog/new-in-chrome-137?hl=en'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2025/05/index.json'
date: '2025-05-29T01:18:18Z'
tags:
  - Chrome
  - ReleaseNote
relatedLinks:
  - title: Chrome 137  |  Release notes  |  Chrome for Developers
    url: 'https://developer.chrome.com/release-notes/137'
---
Chrome 137リリース。
CSS関連では、条件付き値を表現する `if()` 関数が追加。
フォーカスナビゲーション順序を制御する `reading-flow`/`reading-order`プロパティを追加。筆記体での文字間隔を無視する改善、`accent-color` プロパティでのシステムアクセントカラー対応を実装。`offset-path: shape()` サポート。

Web API関連では、Selection APIに `getComposedRanges()` と `direction` プロパティが追加。Blob URLのパーティショニング（fetch/navigation）が実装。
Web Cryptographyでの `Ed25519` サポートが追加。HSTSキャッシュを使ったトラッキングを防止する機能を実装。応答しないWebページのクラッシュレポートをReporting APIでサポート。

WebAssemblyでは、JavaScript Promise Integration（JSPI）の正式サポートが追加。
branch hintのサポートなど
