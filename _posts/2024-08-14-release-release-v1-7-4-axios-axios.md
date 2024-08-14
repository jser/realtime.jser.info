---
title: Release Release v1.7.4 · axios/axios
author: azu
layout: post
itemUrl: 'https://github.com/axios/axios/releases/tag/v1.7.4'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/08/index.json'
date: '2024-08-14T14:28:49Z'
tags:
  - HTTP
  - security
  - library
  - ReleaseNote
---
axios v1.7.4リリース。
CVE-2024-39338のSSRFの対応。
サーバでのみ`baseURL`が指定されている場合でも、`//example.com`のようなprotocol-relative URLで`baseURL`を無視できたのを、強制的に相対パスとして扱うように変更。
