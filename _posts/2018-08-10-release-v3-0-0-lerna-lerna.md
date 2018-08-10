---
title: Release v3.0.0 · lerna/lerna
author: azu
layout: post
itemUrl: 'https://github.com/lerna/lerna/releases/tag/v3.0.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/08/index.json'
date: '2018-08-10T01:41:29Z'
tags:
  - JavaScript
  - monorepo
  - ReleaseNote
  - Tools
---
monorepo管理ツールのlerna 3.0.0リリース。
`lerna publish`と`lerna version`コマンドに分離、`lerna changed`の追加。
`lerna publish`時に自動的にGitへ`--no-verify`を渡すのをやめ`--commit-hook`オプションを追加、lerna自身をmonorepoで管理するようになるなど
