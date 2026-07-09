---
title: Announcing TypeScript 7.0 - TypeScript
author: azu
layout: post
itemUrl: 'https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/07/index.json'
date: '2026-07-09T00:50:17Z'
tags:
  - TypeScript
  - ReleaseNote
---
TypeScript 7.0リリース。
Goで書き直したネイティブ版の`tsc`をnpmの`typescript`パッケージとして公開。
TypeScript 6.0で非推奨となった`target: es5`/`baseUrl`などはエラーとなる。
`--checkers`/`--builders`/`--singleThreaded`による並列処理の制御を追加。
`--watch`をParcelのfile watcherを元に作り直し、LSPの対応などが含まれる。
一方でまだプログラム向けのAPIは公開していないため、VueなどのTypeScript APIを使うツールはまだ動作しない場合がある。
