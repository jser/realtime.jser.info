---
title: Release v5.1.0 · webpack/webpack
author: azu
layout: post
itemUrl: 'https://github.com/webpack/webpack/releases/tag/v5.1.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/10/index.json'
date: '2020-10-15T22:59:57Z'
tags:
  - webpack
  - ReleaseNote
relatedLinks:
  - title: >-
      [5.0.0] require() of a non-existing package in a try-catch block is broken
      · Issue #11639 · webpack/webpack
    url: 'https://github.com/webpack/webpack/issues/11639'
---
webpack 5.1.0リリース。
`cleverMerge`、`EntryOptionPlugin`、`DynamicEntryPlugin`をPublic APIに変更。
try-catch内で`require`を使ってモジュールの有無を判定する処理がエラーとなる問題の修正
