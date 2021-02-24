---
title: Introducing State Partitioning - Mozilla Hacks - the Web developer blog
author: azu
layout: post
itemUrl: 'https://hacks.mozilla.org/2021/02/introducing-state-partitioning/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/02/index.json'
date: '2021-02-24T02:21:13Z'
tags:
  - Firefox
  - security
  - article
relatedLinks:
  - title: State Partitioning - Mozilla | MDN
    url: >-
      https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Privacy/State_Partitioning
  - title: Firefox 86 Introduces Total Cookie Protection - Mozilla Security Blog
    url: 'https://blog.mozilla.org/security/2021/02/23/total-cookie-protection/'
---
Firefox 86でETPのStrictモードを使っている際に有効化されたState Partitioningについて。
Cookieの保存もサイトごとのdoubled keyとなり、3rd party cookieなども分離される。
SSOなどを壊さないようにopenerを使った動作に対するヒューリスティックな回避策やStorage Access APIについても書かれている
