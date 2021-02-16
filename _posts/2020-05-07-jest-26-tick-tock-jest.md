---
title: 'Jest 26: Tick Tock · Jest'
author: azu
layout: post
itemUrl: 'https://jestjs.io/blog/2020/05/05/jest-26'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/05/index.json'
date: '2020-05-07T03:45:15Z'
tags:
  - JavaScript
  - testing
  - library
  - ReleaseNote
---
Jest 26リリース。
`@sinonjs/fake-timers`ベースの新しいFake Timerの追加、`it`や`describe`などをexportする`@jest/globals`の追加、Native ESMのサポートなど。
いくつかのコアモジュールでES5のビルドを提供しないように変更し、Node.js 8未満のサポートを終了。
今後の変更として、Jest 27でデフォルトのtestRunner&quot;jest-circus&quot;に変更しenvironmentを&quot;node&quot;に変更する。
また、Jest 28で&quot;jest-jasmine2&quot;と&quot;jest-environment-jsdom&quot;を削除予定。
