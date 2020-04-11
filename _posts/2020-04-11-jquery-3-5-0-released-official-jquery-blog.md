---
title: jQuery 3.5.0 Released! | Official jQuery Blog
author: azu
layout: post
itemUrl: 'https://blog.jquery.com/2020/04/10/jquery-3-5-0-released/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/04/index.json'
date: '2020-04-11T01:35:14Z'
tags:
  - jQuery
  - ReleaseNote
relatedLinks:
  - title: '3.5 incompatible with FullCalendar 3 · Issue #4664 · jquery/jquery'
    url: 'https://github.com/jquery/jquery/issues/4664'
---
jQuery 3.5.0リリース。
`jQuery.htmlPrefilter`の正規表現のタグ展開によってXSSが発生する問題の修正。これによって`$("<div><div/></div>")` のようなself-closedなタグと他のタグの組わせの挙動が変更される破壊的な変更も含まれる。
4.0で削除される予定の`:even`と`:odd`の代わりに`.even()`と`.odd()`を追加など
