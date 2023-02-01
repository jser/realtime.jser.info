---
title: Release v2.0.0 · pmndrs/jotai
author: azu
layout: post
itemUrl: 'https://github.com/pmndrs/jotai/releases/tag/v2.0.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/02/index.json'
date: '2023-02-01T04:55:23Z'
tags:
  - JavaScript
  - library
  - ReleaseNote
---
Jotai 2.0.0リリース。
`createStore` APIをexpose。
破壊的な変更として、Async atomsではPromiseを返すのではなく`await`しないといけないように、`initialValues`を`store`で渡すように変更など
