---
title: Release v1.2.0 · remix-run/remix
author: azu
layout: post
itemUrl: 'https://github.com/remix-run/remix/releases/tag/v1.2.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/02/index.json'
date: '2022-02-20T11:52:23Z'
tags:
  - React
  - server
  - library
  - ReleaseNote
---
Remix v1.2.0リリース。
`serverBuildTarget`オプションを追加しデプロイターケットごとに最適化した出力となるように、`server`オプションでカスタムサーバを指定できるように。
Nodeのビルトインモジュールを使っている場合にshimが入るように、`serverDependenciesToBundle`でCJS向けの出力する際にESMパッケージをbundleできるようになるなど
