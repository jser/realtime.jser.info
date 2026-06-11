---
title: >-
  Why pnpm no longer expands environment variables in a repository&#039;s .npmrc
  | pnpm
author: azu
layout: post
itemUrl: 'https://pnpm.io/blog/2026/06/11/env-variables-in-repository-npmrc'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/06/index.json'
date: '2026-06-11T23:00:35Z'
tags:
  - pnpm
  - security
  - npm
  - article
relatedLinks:
  - title: >-
      CAND-PNPM-122: Repository config can expand victim environment secrets
      into registry requests before scripts run · Advisory · pnpm/pnpm
    url: 'https://github.com/pnpm/pnpm/security/advisories/GHSA-3qhv-2rgh-x77r'
---
悪意あるリポジトリの`.npmrc`を使って環境変数が盗まれる問題への対策として、pnpmがリポジトリ管理の`.npmrc`で環境変数を展開しなくなった経緯の解説。
v10.34.2/v11.5.3以降、リポジトリ内の`.npmrc`や`pnpm-workspace.yaml`の認証情報やレジストリURLに含まれる`${...}`は展開されなくなった。
ユーザーレベルの`~/.npmrc`や `PNPM_CONFIG_NPMRC_AUTH_FILE` で指定されている`.npmrc`では引き続き展開される。
