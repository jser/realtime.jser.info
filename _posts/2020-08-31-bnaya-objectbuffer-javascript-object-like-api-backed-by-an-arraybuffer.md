---
title: 'Bnaya/objectbuffer: JavaScript Object like api, backed by an arraybuffer'
author: azu
layout: post
itemUrl: 'https://github.com/Bnaya/objectbuffer'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/08/index.json'
date: '2020-08-31T08:42:06Z'
tags:
  - JavaScript
  - library
  - webworker
---
`ArrayBuffer`をバックエンドに使ったオブジェクトデータライブラリ。
通常のオブジェクトはWeb Workerなどに渡す際にコピーされるが、`ArrayBuffer`などのTransferableなオブジェクトならコピーせずに渡せるのを目的にしている。
