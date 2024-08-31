---
title: >-
  monorepo内でのパッケージのバージョンを1つだけに統一するOne Version Ruleをpnpm catalogで実装する - newmo
  技術ブログ
author: azu
layout: post
itemUrl: 'https://tech.newmo.me/entry/one-version-rule-built-on-pnpm-catalog'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/08/index.json'
date: '2024-08-31T06:02:55Z'
tags:
  - npm
  - pnpm
  - monorepo
  - JavaScript
  - article
---
pnpm catalogを使い、monorepo内で依存するライブラリのバージョンを1つだけにする方法について。
pnpm 9.5で導入されたcatalogを使い依存するパッケージの一覧を管理、`.pnpmfile.cjs`のhooksを使いcatalogで管理されてない依存をエラーとする実装について。
