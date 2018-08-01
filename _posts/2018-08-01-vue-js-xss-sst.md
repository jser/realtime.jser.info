---
title: Vue.js で XSS を作り込まないために気を付けること - SSTエンジニアブログ
author: azu
layout: post
itemUrl: 'https://techblog.securesky-tech.com/entry/2018/08/01/110000'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/08/index.json'
date: '2018-08-01T23:56:36Z'
tags:
  - Vue
  - security
  - article
  - XSS
---
Vue.jsでXSSが発生するポイントについての解説。
`v-html`、`href`のバインディグ、サーバサイドのテンプレートとCSRでのエスケープ漏れなどについて
