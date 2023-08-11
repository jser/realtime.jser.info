---
title: Updates to Storage Policy | WebKit
author: azu
layout: post
itemUrl: 'https://webkit.org/blog/14403/updates-to-storage-policy/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/08/index.json'
date: '2023-08-11T04:43:36Z'
tags:
  - safari
  - JavaScript
  - article
---
SafariのWeb StorageのPolicyについて。
Originごと/全体でのQuotaがあり、Quotaを超えると`QuotaExceededError`が発生する。
利用されていないウェブサイトのデータはオリジンごとに削除される。また、ストレージの永続性を保証するためのStorage APIの使い方について
