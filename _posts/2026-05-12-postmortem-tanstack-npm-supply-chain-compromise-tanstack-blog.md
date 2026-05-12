---
title: 'Postmortem: TanStack npm supply-chain compromise | TanStack Blog'
author: azu
layout: post
itemUrl: 'https://tanstack.com/blog/npm-supply-chain-compromise-postmortem'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/05/index.json'
date: '2026-05-12T10:29:35Z'
tags:
  - TanStack
  - npm
  - security
  - Actions
  - article
---
2026年5月11日に発生したTanStackのnpmパッケージに対するサプライチェーン攻撃のポストモーテム。
`pull_request_target`ワークフローの設定不備、GitHub Actionsのキャッシュポイズニングを組み合わせた攻撃手法について。
フォークからのPRで実行されたコードがpnpmのキャッシュを汚染し、後のリリースワークフローで悪意のあるバイナリが復元された。
`/proc/`経由でランナープロセスのメモリからOIDCトークンを抽出してnpm publishに利用された。
対策として`pull_request_target`を使うワークフローの監査、サードパーティActionのコミットハッシュ固定などを挙げている。
