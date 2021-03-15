---
title: Socket.IO 4.0.0 | Socket.IO
author: azu
layout: post
itemUrl: 'https://socket.io/blog/socket-io-4-release/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/03/index.json'
date: '2021-03-15T14:31:43Z'
tags:
  - WebSocket
  - node.js
  - library
  - ReleaseNote
relatedLinks:
  - title: Migrating from 3.x to 4.0 | Socket.IO
    url: 'https://socket.io/docs/v3/migrating-from-3-x-to-4-0/'
  - title: >-
      fix: set default protocol version to 3 to allow backward compatibilit...
      by simonemazzoni · Pull Request #616 · socketio/engine.io
    url: 'https://github.com/socketio/engine.io/pull/616'
---
Socket.IO 4.0.0リリース。
破壊的な変更としてサーバ側の`io.to()`がimmutableに変更、protocolは互換性を維持している。
`pingTimeout`のデフォルト値を5秒から20秒へ変更、Utilityメソッドの追加、`autoUnref`オプションの追加など
