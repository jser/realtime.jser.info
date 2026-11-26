---
title: Vite 8.4 is out! | Vite
author: azu
layout: post
itemUrl: 'https://vite.dev/blog/announcing-vite8-4'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/11/index.json'
date: '2026-11-26T12:08:11Z'
tags:
  - vite
  - ReleaseNote
---
Vite 8.4リリース。
`server.fs.strict: &#039;extended&#039;`と`server.fs.allow: []`による許可リスト方式のファイル配信チェックを追加。
動的インポートの再試行時にCSSを再取得するように変更し、CSSの`url()`でサブパスインポートをサポート。
CLIプロセスの重複検出と回避用の`--bypass-lock`、WebAssemblyのSource Phase Importsを追加。
SSR向けのバンドル開発モードを実験的にサポート。
