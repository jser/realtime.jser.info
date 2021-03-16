---
title: >-
  Mitigate cross-site scripting (XSS) with a strict Content Security Policy
  (CSP)
author: azu
layout: post
itemUrl: 'https://web.dev/strict-csp/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/03/index.json'
date: '2021-03-16T19:19:21Z'
tags:
  - CSP
  - article
  - security
---
ドメインの許可リストのCSPよりも、strict設定のCSPを推奨するという話。
nonceとstrict-dynamicベースのCSP設定で防げるXSS、nonceベースとhashベースのCSPの設定、CSPの導入手順について
