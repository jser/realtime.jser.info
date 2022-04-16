---
title: Release v1.4.0 · remix-run/remix
author: azu
layout: post
itemUrl: 'https://github.com/remix-run/remix/releases/tag/v1.4.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/04/index.json'
date: '2022-04-16T08:26:38Z'
tags:
  - JavaScript
  - Remix
  - library
  - ReleaseNote
---
Remix v1.4.0リリース。
`remix`という単独のパッケージを参照させる&quot;magic imports&quot;という仕組みのために、`node_modules`を直接編集してたがpnpmなどで動かない問題があった。
そのため、それぞれのパッケージを参照するようにするためのマイグレーションスクリプトの公開とそれに関連する変更が含まれている。
