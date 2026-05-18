---
title: Release pnpm 11.1.3 · pnpm/pnpm
author: azu
layout: post
itemUrl: 'https://github.com/pnpm/pnpm/releases/tag/v11.1.3'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/05/index.json'
date: '2026-05-18T22:40:56Z'
tags:
  - pnpm
  - ReleaseNote
---
pnpm v11.1.3リリース。
インストール時に`pnpm-lock.yaml`のエントリを`minimumReleaseAge`と`trustPolicy`で再検証するように変更と`minimumReleaseAgeStrict`モードの追加。
`pnpm self-update`が`minimumReleaseAge`を尊重するように変更、`NODE_AUTH_TOKEN`未設定時のOIDC認証失敗などを修正。
