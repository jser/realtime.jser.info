---
title: JavaScript - BrowserifyからWebpackへの移行時の注意点 - Qiita
author: azu
layout: post
itemUrl: 'http://qiita.com/derui@github/items/5233b4ef8fbde1e80d33'
date: '2014-09-29T09:39:56.861Z'
tags:
  - JavaScript
  - browserify
---
Browserifyから見たWebpackのメリットについて。 Browserifyはデフォルト(factor-bundleなどが必要)では1ビルドに1出力で、Webpackは複数のファイルを吐き出せる。
また、Webpackはデフォルトで賢いビルドをするため高速にビルド出来る。
(BrowserifyはAdvanced Optionsなどで細かい指定やビルドの工夫が必要)
どちらもビルド時間の多くがSourceMap出力が占めている傾向がある。
