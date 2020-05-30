---
title: Detect inactive users with the Idle Detection API
author: azu
layout: post
itemUrl: 'https://web.dev/idle-detection/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/05/index.json'
date: '2020-05-30T15:54:13Z'
tags:
  - Chrome
  - WebPlatformAPI
  - article
  - proposal
---
ユーザー/スクリーンがアクティブではない常態かを判定するAPI。
Chrome 84でOrigin Trialとして提供されている。
userとscreenのidle状態、変更検知ができる。利用には`notifications`のパーミッションを取得する必要がある。
