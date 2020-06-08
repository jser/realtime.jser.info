---
title: 'Case study: Analyzing Notion app performance · PerfPerfPerf'
author: azu
layout: post
itemUrl: 'https://3perf.com/blog/notion/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/06/index.json'
date: '2020-06-08T12:37:44Z'
tags:
  - jacvas
  - performance
  - browser
  - article
---
Notionのページをリバースエンジニアリングしてパフォーマンスの改善ポイントを見ていく話。
ロード関するJavaScriptコードの分離、初期化処理の遅延実行、webpackの`concatenateModules`オプション。
利用していないコードの削除、core-jsの複数バージョンが含まれる問題、サードパーティスクリプトの遅延ロード、SSR時のstateの渡し方とscriptのpreloadについてなど
