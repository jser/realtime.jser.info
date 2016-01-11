---
title: RxJSで副作用を扱うにはどうするか - Schedulerを交えて - snyk_s log
author: azu
layout: post
itemUrl: 'http://saneyukis.hatenablog.com/entry/2016/01/04/055932'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2016/01/index.json'
date: '2016-01-11T14:43:31+00:00'
tags:
  - JavaScript
  - Rx
---
RxJSでの副作用を扱うときに考えるべきこと。
意図せず複数回呼ばれないようにHot Observableへ変換する、race conditionを避ける、副作用があった事を後続に通知することについて。
