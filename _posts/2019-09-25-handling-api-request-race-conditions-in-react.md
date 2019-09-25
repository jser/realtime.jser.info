---
title: Handling API request race conditions in React
author: azu
layout: post
itemUrl: 'https://sebastienlorber.com/handling-api-request-race-conditions-in-react'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/09/index.json'
date: '2019-09-25T12:19:48Z'
tags:
  - JavaScript
  - React
  - article
---
ネットワークの遅延などにより複数のリクエストが送信され、リクエストが成功タイミングとUIの状態が一致しなくなる問題について。
Reactを例に、リクエストに問題があった場合にどのように問題を回避するかについて書かれている。
不要なレスポンスを無視、リクエストをキャンセルなどの実装方法について
