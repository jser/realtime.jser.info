---
title: Release electron v6.0.0 · electron/electron
author: azu
layout: post
itemUrl: 'https://github.com/electron/electron/releases/tag/v6.0.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/07/index.json'
date: '2019-07-29T23:04:12Z'
tags:
  - Electron
  - ReleaseNote
relatedLinks:
  - title: >-
      Chromium Blog: Chrome 76 Beta: dark mode, payments, new PWA features and
      more
    url: >-
      https://blog.chromium.org/2019/06/chrome-76-beta-dark-mode-payments-new.html
---
Electron 6.0.0リリース。
Chromium 76へのアップデート、Cookies APIでPromiseのサポート、macOSでTouch IDでの認証を行う`promptForTouchID()`の追加など。
sandboxed renderersで非推奨となっていた`require('fs')`などでrequireできる挙動の削除など。代わりに明示的な `remote.require` を使う必要がある。
