---
title: The Secret of Good Electron Apps
author: azu
layout: post
itemUrl: 'https://jlongster.com/secret-of-good-electron-apps'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/06/index.json'
date: '2019-06-27T11:36:38Z'
tags:
  - Electron
  - article
  - debug
relatedLinks:
  - title: >-
      jlongster/electron-with-server-example: An example Electron app with a
      backend server all wired up via IPC
    url: 'https://github.com/jlongster/electron-with-server-example'
---
Electronアプリのパターンについての記事。
メモリの消費を抑えるために、バックグラウンドサーバを作り必要なデータを都度読み込んで返すようにする。
また開発時はバックグラウンドサーバの代わりに別のウィンドウを使うことでデバッグがしやすくなることについてなど
