---
title: >-
  esbuild-kit/tsx: Node.js runtime enhanced with esbuild for loading TypeScript
  &amp; ESM
author: azu
layout: post
itemUrl: 'https://github.com/esbuild-kit/tsx'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/05/index.json'
date: '2022-05-16T22:06:52Z'
tags:
  - TypeScript
  - jsx
  - node.js
  - library
---
esbuildを使ってTypeScript変換しながら実行するツール。
ESMとCJSをそれぞれ扱うloaderを持っていて、package.jsonの`type`フィールドによって自動でloaderを切り換えて扱える
