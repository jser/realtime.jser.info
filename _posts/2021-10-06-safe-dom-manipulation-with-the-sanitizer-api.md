---
title: Safe DOM manipulation with the Sanitizer API
author: azu
layout: post
itemUrl: 'https://web.dev/sanitizer/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/10/index.json'
date: '2021-10-06T14:34:15Z'
tags:
  - WebPlatformAPI
  - security
  - JavaScript
  - article
---
Sanitizer APIのProposalについて。
HTML文字列をサニタイズするAPIと`Element#setHTML`での設定方法について。
DomPurifyなどとは異なりサニタイズしたHTML文字列ではなく、HTMLElementを返すAPIを持つ
