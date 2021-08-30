---
title: 'Modern client-side routing: the App History API'
author: azu
layout: post
itemUrl: 'https://web.dev/app-history-api/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/08/index.json'
date: '2021-08-30T13:56:14Z'
tags:
  - Chrome
  - WebPlatformAPI
  - article
relatedLinks:
  - title: >-
      WICG/app-history: The app history API provides a web application-focused
      way of managing same-origin same-frame history entries and navigations.
    url: 'https://github.com/WICG/app-history'
---
Chrome 95にてフラグ付きで実装されたApp History APIについて。
問題のあるHistory APIを置き換えるAPI。
`navigation`イベントでのナビゲーションの検知、`transitionWhile(promise)`での遷移中/成功/失敗の表現、ナビゲーションエラー時のロールバックなどの具体例について。
また、Historyの管理、状態の管理、FormのSubmitにおけるナビゲーションを扱える点についてなど
