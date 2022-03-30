---
title: React v18.0 – React Blog
author: azu
layout: post
itemUrl: 'https://reactjs.org/blog/2022/03/29/react-v18.html'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/03/index.json'
date: '2022-03-30T13:52:16Z'
tags:
  - React
  - ReleaseNote
relatedLinks:
  - title: How to Upgrade to React 18 – React Blog
    url: 'https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html'
---
React 18リリース。
Concurrent Renderingに対応するための変更と新しいAPIが追加される。
setStateの呼び出しを自動的にバッチ化とopt-outするための`flushSync`を追加、ページ遷移時の状態を扱うTransition APIを追加。
クライアントに`createRoot`/`hydrateRoot`、サーバに`renderToPipeableStream`/`renderToReadableStream`を追加。
`&lt;StrictMode&gt;`が開発時は再マウントをテストする挙動に変更、`useId`/`useSyncExternalStore`/`useInsertionEffect`のHooksの追加など。
