---
title: Deprecating the unload event - Chrome Developers
author: azu
layout: post
itemUrl: 'https://developer.chrome.com/en/blog/deprecating-unload/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/08/index.json'
date: '2023-08-11T10:06:02Z'
tags:
  - Chrome
  - JavaScript
  - article
---
Chrome 117から`unload`イベントがDeprecatedとなる。
`unload`イベントはうまく動かないことが多くBFCacheを無効にする。
代用として`visibilitychange`/`pagehide`イベントを推奨している。`unload`イベントを利用しているかを調べる方法についてなど
