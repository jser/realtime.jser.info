---
title: Full Third-Party Cookie Blocking and More | WebKit
author: azu
layout: post
itemUrl: 'https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/03/index.json'
date: '2020-03-26T12:54:19Z'
tags:
  - safari
  - security
  - privacy
  - article
---
iOS 13.4、Safari 13.1のITPについて。
3rd-party cookieは基本的にブロック、LocalStorageを含むストレージは最後のインタラクションから7日後に削除され、`document.referrer`はoriginのみとなった。
ストレージ削除のカウントのルールについてはホームに追加したアプリやSafariを起動していない日はカウントしないなどの例外がある
