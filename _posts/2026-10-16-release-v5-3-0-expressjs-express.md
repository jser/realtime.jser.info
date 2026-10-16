---
title: Release v5.3.0 · expressjs/express
author: azu
layout: post
itemUrl: 'https://github.com/expressjs/express/releases/tag/v5.3.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/10/index.json'
date: '2026-10-16T00:07:32Z'
tags:
  - express
  - nodejs
  - ReleaseNote
---
Express 5.3.0リリース。
`Content-Disposition`のファイル名の引用符を省略する条件を変更、`res.send()`で既存の`Content-Type`パラメーターを保持するように変更。
`req.fresh`が`QUERY`メソッドに対応、デフォルトのエラーハンドラーが`Error.cause`を含むエラー全体をログに出力。
