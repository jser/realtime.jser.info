---
title: Release v5.0.1 · verdaccio/verdaccio
author: azu
layout: post
itemUrl: 'https://github.com/verdaccio/verdaccio/releases/tag/v5.0.1'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/04/index.json'
date: '2021-04-10T12:42:10Z'
tags:
  - npm
  - library
  - ReleaseNote
relatedLinks:
  - title: >-
      typicode/lowdb: :zap: lowdb is a small local JSON database powered by
      Lodash (supports Node, Electron and the browser)
    url: 'https://github.com/typicode/lowdb'
---
npm registryの実装であるverdaccio 5.0リリース。
npm token createのサポートがデフォルト化、native moduleへの依存の問題からtokenの保存にleveldbではなくlowdbを利用するように。
