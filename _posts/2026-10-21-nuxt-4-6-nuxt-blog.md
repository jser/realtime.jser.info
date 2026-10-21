---
title: Nuxt 4.6 · Nuxt Blog
author: azu
layout: post
itemUrl: 'https://nuxt.com/blog/v4-6'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/10/index.json'
date: '2026-10-21T12:53:14Z'
tags:
  - Vue
  - ReleaseNote
---
Nuxt v4.6.0リリース。
同梱のNuxt CLI v4で`nuxt init`を削除し、`npm create nuxt@latest`に統一。
サーバー処理の共通APIとなる`nuxt/server`、`runtimeConfig.appSecret`とセッション管理APIを追加。
`experimental.routeTypedFetch`で`$fetch`/`useFetch`の型推論を刷新し、型チェックのパフォーマンスを改善。
Vue Vaporとの相互運用、`createUseFetch`/`createUseAsyncData`の`addons`、実験的な`@nuxt/vite-server`を追加。
`my-bad`による開発時のエラー表示、`nuxt dev`の対話パネル、`nuxt curl`/`nuxt task`コマンドを追加など
