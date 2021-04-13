---
title: >-
  DevTools architecture refresh: migrating DevTools to TypeScript - Chrome
  Developers
author: azu
layout: post
itemUrl: 'https://developer.chrome.com/blog/migrating-to-typescript/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/04/index.json'
date: '2021-04-13T11:38:41Z'
tags:
  - Chrome
  - article
  - TypeScript
---
Chrome DevToolsのコードベースを
Closure Compilerベースの型チェックからTypeScriptに移行する話。
なぜ移行するのか、TypeScriptの型推論の評価、移行のオプションですべてのTSエラーを修正する方法を選んだ理由、マイグレーションの分析などについて
