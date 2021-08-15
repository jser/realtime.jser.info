---
title: >-
  JavaScript Development: Making a Web Worker optional | by Tobias Uhlig | Aug,
  2021 | ITNEXT
author: azu
layout: post
itemUrl: >-
  https://itnext.io/javascript-development-making-a-web-worker-optional-f23a13490b28
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/08/index.json'
date: '2021-08-15T15:12:01Z'
tags:
  - JavaScript
  - webworker
  - article
relatedLinks:
  - title: 'neomjs/neo: The application worker driven frontend framework'
    url: 'https://github.com/neomjs/neo'
---
重たいロジックを別のWeb Workerで分けることには意味があるが、スレッドがほとんどアイドル状態の場合にWorkerを分けるとpostMessage分の遅延が発生してしまう。
Workerとして分けて実行していた処理を、同じAPIを維持しつつ同じスレッドで実行するように処理を変更するアプローチについて。
neo.mjs 2.3.4ではどのように対応したかについて。
