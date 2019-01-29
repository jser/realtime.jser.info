---
title: 'egoist/import-http: Import modules from URL instead of local node_modules'
author: azu
layout: post
itemUrl: 'https://github.com/egoist/import-http'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/01/index.json'
date: '2019-01-29T01:32:07Z'
tags:
  - webpack
  - JavaScript
  - plugin
  - module
---
ブラウザやdenoのようにmoduleを`import m from "https://"`のように指定するためのwebpack, rollupプラグイン。
モジュールのダウンロード、キャッシュ、import先の書き換えを行う。
