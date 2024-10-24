---
title: The nuances of base64 encoding strings in JavaScript  |  Articles  |  web.dev
author: azu
layout: post
itemUrl: 'https://web.dev/articles/base64-encoding'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/10/index.json'
date: '2024-10-24T13:30:31Z'
tags:
  - Unicode
  - JavaScript
  - article
---
絵文字やサロゲートペアを安全に扱えるBase64エンコードについて。
`btoa()`/`atob()`はUnicodeを扱うときに問題があるため`TextEncoder`でエンコードしてから扱う。
`TextEncoder`は単独のサロゲートを持つ文字列を不正なデータとして � に置き換えてしまうため、`isWellFormed()`を使い判定する話
