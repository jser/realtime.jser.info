---
title: Release v3.0.0 · foliojs/fontkit
author: azu
layout: post
itemUrl: 'https://github.com/foliojs/fontkit/releases/tag/v3.0.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/11/index.json'
date: '2026-11-21T07:41:05Z'
tags:
  - fonts
  - JavaScript
  - library
  - ReleaseNote
---
fontkit v3.0.0リリース。
ESM-onlyに変更し、Node.js 22以降、Firefox 115以降、Safari 16以降、Chrome 120以降を対象に変更。
Node.jsとブラウザのビルドを分離し、Node.jsではネイティブの圧縮機能、ブラウザではfflateを利用。
`fontkit/core`、`registerFormat`、`registerShaper`を追加し、必要なフォント形式や文字整形処理のみを登録できるように。
