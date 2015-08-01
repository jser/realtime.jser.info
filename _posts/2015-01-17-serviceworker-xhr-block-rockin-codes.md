---
title: ServiceWorker を使った XHR のモックテスト - Block Rockin’ Codes
author: azu
layout: post
itemUrl: 'http://jxck.hatenablog.com/entry/response-injection'
date: '2015-01-17T07:21:14.182Z'
tags:
  - JavaScript
  - ServiceWorker
---
ServiceWorkerを使ったXHRのモック。
`onfetch`に登録すれば、XHR等のリクエストに対してhookができるので、事前に定義しておいたレスポンスを返すようにする。
ServiceWorkerの登録プロセスについて
