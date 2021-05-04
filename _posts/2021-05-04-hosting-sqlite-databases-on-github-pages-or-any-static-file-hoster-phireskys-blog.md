---
title: >-
  Hosting SQLite databases on Github Pages - (or any static file hoster) -
  phiresky&#039;s blog
author: azu
layout: post
itemUrl: 'https://phiresky.github.io/blog/2021/hosting-sqlite-databases-on-github-pages/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/05/index.json'
date: '2021-05-04T08:21:19Z'
tags:
  - SQLite
  - JavaScript
  - WebAssembly
  - article
---
WebAssemblyでコンパイルしたSQLiteと参照用のSQLiteファイルを用意し、必要な部分だけを取得できる仕組みを作ったという話。
DBファイルをすべてメモリへ載せないで使うために、HTTP Rangeリクエストを使って必要なchunkだけを取得するHTTPベースの仮想ファイルシステムを作っている。
SQLiteのDBのページサイズやスキーマ情報から必要な部分だけをRangeリクエストをで取得している。
