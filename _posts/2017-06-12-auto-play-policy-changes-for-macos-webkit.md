---
title: Auto-Play Policy Changes for macOS | WebKit
author: azu
layout: post
itemUrl: 'https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/06/index.json'
date: '2017-06-12T07:42:44Z'
tags:
  - safari
  - video
  - article
  - audio
---
Mac Safariもmobile safariやChromeと同じようにMediaElementの自動再生がユーザー起因でないとできなくなるように。
play()がPromiseを返し、失敗の場合はrejectされる。
Video/Audio/サイト要素毎に許可が決まるので、複数の動画を流す場合は要素を作るのではなく、既存の要素のsrcを変更する。
