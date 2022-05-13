---
title: >-
  esbuild-kit/tsx: Node.js runtime enhanced with esbuild for loading TypeScript
  &amp; ESM
author: azu
layout: post
itemUrl: 'https://github.com/esbuild-kit/tsx'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/05/index.json'
date: '2022-05-13T21:18:28Z'
tags:
  - TypeScript
  - jsx
  - node.js
  - library
---
esbuildを使ってTypeScript実行しながら変換するツール。
ESMとCJSをそれぞれ扱うloaderを持っていて、package.jsonの`type`フィールドによって自動でloaderを切り換えて扱える
