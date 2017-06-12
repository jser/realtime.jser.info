---
title: Auto-Play Policy Changes for macOS | WebKit
author: azu
layout: post
itemUrl: 'https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/06/index.json'
date: '2017-06-12T13:06:39Z'
tags:
  - article
  - audio
  - safari
  - video
---
Mac Safariもmobile safariなどと同様にMediaElementの自動再生がユーザー起因でないといけなくする変更。
play()がPromiseを返し、失敗の場合はrejectされる。 Video/Audio/サイト毎に許可が決まるので、複数の要素を作るのではなく一つのsrcを変更して使うことを推奨してる。
