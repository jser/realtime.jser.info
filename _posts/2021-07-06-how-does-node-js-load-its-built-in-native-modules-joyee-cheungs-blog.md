---
title: 'How does Node.js load its built-in/native modules? | Joyee Cheung&#039;s Blog'
author: azu
layout: post
itemUrl: >-
  https://joyeecheung.github.io/blog/2021/07/06/how-does-node-js-load-its-builtins-native-modules/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/07/index.json'
date: '2021-07-06T13:38:53Z'
tags:
  - node.js
  - article
---
Node.js内のJavaScriptで書かれたビルトインモジュールは、Node.jsバイナリにどのように保存されて読み込まれているかについて。
バイナリファイルの読み取り専用のデータセクションに保存されており、bootstrapでV8を使ってコンパイルやSnapshotsを扱う仕組みをもっている。
