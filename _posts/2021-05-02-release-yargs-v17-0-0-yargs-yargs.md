---
title: Release yargs v17.0.0 · yargs/yargs
author: azu
layout: post
itemUrl: 'https://github.com/yargs/yargs/releases/tag/v17.0.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/05/index.json'
date: '2021-05-02T22:44:23Z'
tags:
  - JavaScript
  - node.js
  - deno
  - library
  - ReleaseNote
---
コマンドライン引数パーサーのyargs 17.0.0リリース。
破壊的な変更として、Node.js 10のサポート終了、PrivateメソッドにPrivate Fieldsを使うように変更、`reset()`メソッドを非推奨化など。
Node v14.8.0からTop-Level Awaitをサポートしたため、`yargs()`や`parseAsync`など色々な処理で非同期処理に対応するように変更など
