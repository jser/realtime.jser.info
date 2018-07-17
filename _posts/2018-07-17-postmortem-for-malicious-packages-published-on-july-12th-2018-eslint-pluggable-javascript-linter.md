---
title: >-
  Postmortem for Malicious Packages Published on July 12th, 2018 - ESLint -
  Pluggable JavaScript linter
author: azu
layout: post
itemUrl: 'https://eslint.org/blog/2018/07/postmortem-for-malicious-package-publishes'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/07/index.json'
date: '2018-07-17T02:18:10Z'
tags:
  - ESLint
  - npm
  - security
  - node.js
relatedLinks:
  - title: 'The npm Blog — Incident report: npm, Inc. operations incident of...'
    url: >-
      https://blog.npmjs.org/post/175824896885/incident-report-npm-inc-operations-incident-of
  - title: 2018/07/12 に発生したセキュリティ インシデント (eslint-scope@3.7.2) について - Qiita
    url: 'https://qiita.com/mysticatea/items/0141657e4478d9cf4614'
---
`.npmrc`の内容を盗み取る`eslint-scope@3.7.2`と`eslint-config-eslint@5.0.2`が公開された問題についてのレポート。
パスワードリスト攻撃で取られてたアカウントのtokenから直接publishされ、その後npm incによって全ユーザーのtokenがリセットされた。
攻撃手法や対策について
