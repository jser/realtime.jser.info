---
title: Release @apollo/client@4.2.0 · apollographql/apollo-client
author: azu
layout: post
itemUrl: >-
  https://github.com/apollographql/apollo-client/releases/tag/%40apollo%2Fclient%404.2.0
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/05/index.json'
date: '2026-05-24T01:50:42Z'
tags:
  - JavaScript
  - library
  - ReleaseNote
  - GraphQL
---
Apollo Client 4.2.0リリース。
hookやメソッドのシグネチャに、`defaultOptions`を反映する&quot;modern&quot;スタイルを追加。
`RefetchEventManager`クラスを追加し、windowのfocusやネットワーク再接続などのイベントに応じたクエリの自動再取得をサポート。
`client.query`/`client.mutate`/`useMutation`/`preloadQuery`の戻り値の型に`defaultOptions`を反映するように改善。
