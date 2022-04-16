---
title: >-
  facebook/lexical: Lexical is an extensible text editor framework that provides
  excellent reliability, accessibility and performance.
author: azu
layout: post
itemUrl: 'https://github.com/facebook/lexical'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/04/index.json'
date: '2022-04-16T08:33:24Z'
tags:
  - JavaScript
  - editor
  - library
---
テキストエディタを作るためのJavaScritフレームワーク。
エディタの状態をdouble-bufferingで管理している。
状態の変更をdiff/patchで表示に反映させる。
またcontentEditableを使っているが、外部からの変更をMutationObserverで監視し、エディタの状態を更新している。
