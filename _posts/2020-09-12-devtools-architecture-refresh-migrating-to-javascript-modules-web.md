---
title: 'DevTools architecture refresh: Migrating to JavaScript modules  |  Web'
author: azu
layout: post
itemUrl: 'https://developers.google.com/web/updates/2020/09/migrating-to-js-modules'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/09/index.json'
date: '2020-09-12T07:32:54Z'
tags:
  - JavaScript
  - Chrome
  - article
  - refacoring
---
Chrome Dev Toolsのコードベースを独自モジュールシステムからES Modulesに移行した話。
標準であるES Modulesの利点、移行戦略、exportの変更/importの変更の段階的な移行について。
また技術的な負債により初期の見積もり(数週間)よりも大きく時間(数ヶ月)かかったことについてなど
