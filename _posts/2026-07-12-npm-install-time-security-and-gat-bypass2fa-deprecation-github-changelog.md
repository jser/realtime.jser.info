---
title: npm install-time security and GAT bypass2fa deprecation - GitHub Changelog
author: azu
layout: post
itemUrl: >-
  https://github.blog/changelog/2026-07-08-npm-install-time-security-and-gat-bypass2fa-deprecation/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/07/index.json'
date: '2026-07-12T13:10:55Z'
tags:
  - npm
  - security
  - ReleaseNote
relatedLinks:
  - title: Release v12.0.0 · npm/cli
    url: 'https://github.com/npm/cli/releases/tag/v12.0.0'
---
npm v12リリース。
`allowScripts`がデフォルトで無効化され、`--allow-git`/`--allow-remote`はデフォルトで`none`になる。
2FAを回避するGranular Access Tokenは、2026年8月からアカウントやパッケージ管理操作で2FAを省略できなくなる。
2027年1月ごろから直接publishもできなくなり、Trusted PublishingやStaged Publishingのどちらかでないと公開できなく予定。
