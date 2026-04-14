---
title: React Server Components Your Way | TanStack Blog
author: azu
layout: post
itemUrl: 'https://tanstack.com/blog/react-server-components'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/04/index.json'
date: '2026-04-14T01:31:26Z'
tags:
  - React
  - RSC
  - TanStack
  - article
---
TanStackにおけるReact Server Components(RSC)のアプローチについて。
RSCをデータストリームとして扱い、一方向データフローとしてクライアント側でサーバーレンダリングされたUIの取得やキャッシュを制御できる設計になっている。
サーバーがスロットを用意しクライアントが埋めるComposite Componentsという仕組みや、`createServerFn`による明示的なサーバー関数定義などの機能を提供する。
