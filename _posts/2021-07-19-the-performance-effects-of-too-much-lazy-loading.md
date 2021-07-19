---
title: The performance effects of too much lazy-loading
author: azu
layout: post
itemUrl: 'https://web.dev/lcp-lazy-loading/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/07/index.json'
date: '2021-07-19T13:55:27Z'
tags:
  - performance
  - article
---
HTTP Archiveのデータによる`loading=lazy`はウェブサイトの17%で使われていて、その大部分はWordPressのサイトとなっている。
WordPressのサイトはLazy LoadingをAbove the foldな画像に対しても行っていたため、Lazy Loadしない場合に比べてLCPが悪化している問題について。
