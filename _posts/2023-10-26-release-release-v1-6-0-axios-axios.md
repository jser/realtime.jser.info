---
title: Release Release v1.6.0 · axios/axios
author: azu
layout: post
itemUrl: 'https://github.com/axios/axios/releases/tag/v1.6.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/10/index.json'
date: '2023-10-26T23:24:33Z'
tags:
  - HTTP
  - library
  - ReleaseNote
  - security
---
axios v1.6.0リリース。
`X-XSRF-TOKEN`というCookieが設定されている時に、`withCredentials`オプションが有効だと、別オリジンに対するリクエストにも`X-XSRF-TOKEN`の値が送信される脆弱性の修正
