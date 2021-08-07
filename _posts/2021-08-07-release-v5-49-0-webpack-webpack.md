---
title: Release v5.49.0 · webpack/webpack
author: azu
layout: post
itemUrl: 'https://github.com/webpack/webpack/releases/tag/v5.49.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/08/index.json'
date: '2021-08-07T16:29:14Z'
tags:
  - webpack
  - ReleaseNote
relatedLinks:
  - title: >-
      add `experiments.buildHttp` by sokra · Pull Request #13925 ·
      webpack/webpack
    url: 'https://github.com/webpack/webpack/pull/13925'
  - title: Experiments
    url: 'https://github.com/webpack/webpack/projects/9'
---
webpack 5.49.0リリース。
importでhttp(s)なURLをモジュールを読み込める`experiments.buildHttp`オプションの追加。
ダウンロードしたモジュールは`webpack.lock.data/**`以下に保存され、`webpack.lock`でのロックファイルで管理される。
