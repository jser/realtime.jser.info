---
title: CI 環境でのユニットテストの実行時間を2倍速くした話 (Jest + Mongo DB + Circle CI) - ミツモア Tech blog
author: azu
layout: post
itemUrl: 'https://engineering.meetsmore.com/entry/2021/01/21/134930'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/11/index.json'
date: '2021-11-30T01:11:20Z'
tags:
  - node.js
  - jest
  - testing
  - article
---
Jestでのユニットテストの実行時間の削減についての記事。
テストの並列化、変更したファイルのみをテスト、Worker単位でのDBの初期化、CIでキャッシュについて
