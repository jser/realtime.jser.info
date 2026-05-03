---
title: Release v8.0.0 · avajs/ava
author: azu
layout: post
itemUrl: 'https://github.com/avajs/ava/releases/tag/v8.0.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/05/index.json'
date: '2026-05-03T01:14:31Z'
tags:
  - JavaScript
  - testing
  - nodejs
  - library
  - ReleaseNote
---
AVA v8.0.0リリース。
Node.js v22.20/v24.12以降が必須となり、内部実装をESM化。
CommonJSから利用する場合は`const {default: test} = require(&#039;ava&#039;)`への変更が必要。
デフォルトのテストファイル拡張子が`js`/`mjs`に変更され、テストファイルは`import()`経由で読み込まれるように変更。
実行時条件でテストをスキップ/実行する`test.skipIf()`/`test.runIf()`を追加。
`*.tsbuildinfo`ファイルの変更をWatchモードで無視、TAPレポーターのエラー名復元処理の改善など。
