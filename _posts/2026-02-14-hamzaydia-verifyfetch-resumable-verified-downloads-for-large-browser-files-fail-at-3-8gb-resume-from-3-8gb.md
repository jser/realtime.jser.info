---
title: >-
  hamzaydia/verifyfetch: Resumable, verified downloads for large browser files.
  Fail at 3.8GB, resume from 3.8GB.
author: azu
layout: post
itemUrl: 'https://github.com/hamzaydia/verifyfetch'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/02/index.json'
date: '2026-02-14T14:36:10Z'
tags:
  - JavaScript
  - library
  - Fetch
  - WebAssembly
---
ブラウザでの大容量ファイルのダウンロードにおいて、レジューム対応と整合性の検証を行うライブラリ。
WebAssemblyによるストリーミングハッシュ計算、HTTP Rangeリクエストによるレジュームダウンロード、IndexedDBへのChunk保存をサポートする。
事前にファイルを一定のchunkで分けたハッシュを生成しておき、Chunk毎の検証ができる。
