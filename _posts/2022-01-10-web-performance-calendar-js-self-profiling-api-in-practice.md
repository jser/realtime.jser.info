---
title: Web Performance Calendar » JS Self-Profiling API In Practice
author: azu
layout: post
itemUrl: 'https://calendar.perfplanet.com/2021/js-self-profiling-api-in-practice/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/01/index.json'
date: '2022-01-10T14:17:36Z'
tags:
  - JavaScript
  - performance
  - article
relatedLinks:
  - title: >-
      WICG/js-self-profiling: Proposal for a programmable JS profiling API for
      collecting JS profiles from real end-user environments
    url: 'https://github.com/WICG/js-self-profiling'
---
JavaScript Self-Profiling APIについての解説記事。
サンプリングされたプロファイルを取るAPIとなっていて、RUMのような実際のエンドユーザーでの実行結果を取得できる。
Document Policyでの有効化、APIの使い方、ユースケース、プロファイルのデータ形式と取得データの制限などについて。
CORSに対応していないCross-Origin ScriptsのJavaScript関数は、プロファイル上では見えないことやJS以外のデータがプロファイルに入らない点などについて。
