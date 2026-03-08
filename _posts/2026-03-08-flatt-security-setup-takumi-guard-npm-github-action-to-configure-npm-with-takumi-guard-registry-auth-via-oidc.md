---
title: >-
  flatt-security/setup-takumi-guard-npm: GitHub Action to configure npm with
  Takumi Guard registry auth via OIDC
author: azu
layout: post
itemUrl: 'https://github.com/flatt-security/setup-takumi-guard-npm'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/03/index.json'
date: '2026-03-08T15:46:07Z'
tags:
  - npm
  - security
  - Actions
---
npmのパッケージインストールをセキュリティプロキシ経由にすることで、悪意あるパッケージをブロックするGitHub Action。
npm/pnpm/yarnに対応し、レジストリを`https://npm.flatt.tech/`に設定することでインストール時にパッケージをチェックする。
GitHub OIDCを使った認証に対応し、Bot IDを設定することで監査ログやダッシュボードでの可視化が利用できる。
