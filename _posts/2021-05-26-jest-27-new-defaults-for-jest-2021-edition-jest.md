---
title: 'Jest 27: New Defaults for Jest, 2021 edition :fast_forward: · Jest'
author: azu
layout: post
itemUrl: 'https://jestjs.io/blog/2021/05/25/jest-27'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/05/index.json'
date: '2021-05-26T11:59:58Z'
tags:
  - JavaScript
  - testing
  - node.js
  - library
  - ReleaseNote
relatedLinks:
  - title: Release 27.0.0 · facebook/jest
    url: 'https://github.com/facebook/jest/releases/tag/v27.0.0'
---
Jest 27リリース。
デフォルトが大きく変わるリリースとなっていて、`jest-circus`のデフォルト化、fake timersのデフォルトを`@sinonjs/fake-timers`ベースの`modern`に変更している。
機能追加として、失敗したテストをインタラクティブに実行できるように、inline snapshotsをprettierの依存なく実行できるようになど。
また、`done`の複数回呼び出しをエラーとしたり、Promiseを返すのと`done`の混在を禁止したり、TypeScriptの型を厳密化するといった変更も含まれる
