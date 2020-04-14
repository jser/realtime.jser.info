---
title: '電子情報学特論:Chromiumのアーキテクチャを解き明かす - Google スライド'
author: azu
layout: post
itemUrl: >-
  https://docs.google.com/presentation/d/1AzBcuN-dmctk7v1IMZHivfpFAiXwCnsjyJS3wQ4sgE4/preview#slide=id.g82989a6582_1_134
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/04/index.json'
date: '2020-04-14T00:56:12Z'
tags:
  - Chrome
  - slide
  - architecture
  - security
---
Chromiumのプロセスアーキテクチャについてのスライド。
マルチプロセスアーキテクチャ、埋め込みコンテンツでのSpectreのメモリ読み取り、iframeでのSite Isolation、ChromeのGCの実装についてなど。
またレンダリング処理がParsing、Style、Layering、Rasterのステージに分けていて中間データをそれぞれ扱うことで動的な変更に対応している話など
