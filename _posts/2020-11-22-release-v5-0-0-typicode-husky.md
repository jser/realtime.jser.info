---
title: Release v5.0.0 · typicode/husky
author: azu
layout: post
itemUrl: 'https://github.com/typicode/husky/releases/tag/v5.0.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/11/index.json'
date: '2020-11-22T14:44:02Z'
tags:
  - JavaScript
  - 'git '
  - Tools
  - ReleaseNote
relatedLinks:
  - title: Patron License 1.0.0
    url: 'https://patronlicense.com/versions/1.0.0'
---
git hook管理ツールのhusky 5.0.0リリース。`npm install husky@next`でインストールできる。
ライセンスをMITからLicense Zero Parity + MITに変更。
Git 2.9+の`core.hooksPath`を使ったGit Hookの仕組みに変更、インストール時に自動でHook有効化はせずに明示的に`husky install`で有効化するように変更など
