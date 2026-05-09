---
title: Release v1.16.0 · axios/axios
author: azu
layout: post
itemUrl: 'https://github.com/axios/axios/releases/tag/v1.16.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/05/index.json'
date: '2026-05-09T08:46:41Z'
tags:
  - HTTP
  - library
  - JavaScript
  - ReleaseNote
---
axios v1.16.0リリース。
fetch adapterでの`maxBodyLength`/`maxContentLength`の制限を強制、proxyリクエスト時のユーザー指定`Host`ヘッダの保持などの破壊的変更を含む。
また、Basic認証でpercent-encodedされた認証情報のデコード、`parseProtocol`がコロン区切りを厳密に要求するよう変更されている。
QUERY HTTPメソッドのサポート、`AxiosError.ECONNREFUSED`の追加、`encode`ヘルパーのexportなど。
