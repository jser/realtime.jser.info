---
title: 'Rome, a new JavaScript Toolchain'
author: azu
layout: post
itemUrl: 'https://jasonformat.com/rome-javascript-toolchain/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/03/index.json'
date: '2020-03-02T14:12:34Z'
tags:
  - JavaScript
  - article
  - bundler
---
Romeのアーキテクチャについて。
Rome自体がmonorepoでcompilerからbundlerまで含むため、重たいASTの処理のコストを軽減できる。
またコンパイルもモジュールごとにWorkerで実行していて、bundlerは単一スコープが問題となるが、コンパイル結果にファイル名を入れることで回避している仕組みについてなど
