---
title: Migrating to Next.js App Router with zero downtime — WorkOS
author: azu
layout: post
itemUrl: 'https://workos.com/blog/migrating-to-next-js-app-router-with-zero-downtime'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/07/index.json'
date: '2024-07-01T01:50:09Z'
tags:
  - Next.js
  - article
---
Next.jsのPages RouterからApp Routerへの段階的な移行方法について。

1. Next.jsのアップデート
2. `useRouter`の移行
3. 一時的な`/app/new`を作成
4. `rewrites`を使ってクエリでのリダイレクト
5. `/pages`の削除

という手順で移行する方法について
