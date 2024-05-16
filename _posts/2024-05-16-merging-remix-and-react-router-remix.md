---
title: Merging Remix and React Router | Remix
author: azu
layout: post
itemUrl: 'https://remix.run/blog/merging-remix-and-react-router'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/05/index.json'
date: '2024-05-16T00:03:29Z'
tags:
  - React
  - Remix
  - article
---
RemixはReact Router v7としてリリースする予定という話。
RemixとReact Routerは、Viteとサーバ以外はほぼ同等の機能になってきている。
そのため、React RouterをRemixにマイグレーションするのではなく、React RouterをアップデートするだけでRemixの機能を使えるようにしたいという話。
既存のRemixアプリは、import先のパッケージを`react-router`に変更するだけで動く予定という話。
