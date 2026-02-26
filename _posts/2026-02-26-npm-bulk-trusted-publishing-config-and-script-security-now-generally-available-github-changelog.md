---
title: >-
  npm bulk trusted publishing config and script security now generally available
  - GitHub Changelog
author: azu
layout: post
itemUrl: >-
  https://github.blog/changelog/2026-02-18-npm-bulk-trusted-publishing-config-and-script-security-now-generally-available/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/02/index.json'
date: '2026-02-26T13:01:41Z'
tags:
  - npm
  - security
relatedLinks:
  - title: Release v11.11.0 · npm/cli
    url: 'https://github.com/npm/cli/releases/tag/v11.11.0'
---
npm CLI v11.10.0リリース。
`min-release-age`でパッケージの公開から一定日経過したものだけをインストールできるように。
`npm trust`コマンドで複数パッケージのOIDC Trusted Publishingの設定を一括で行えるように。
`--allow-git`フラグの追加により、git依存関係のインストール時のセキュリティ制御が可能に。`.npmrc`でgit実行パスを上書きすることで`--ignore-scripts`使用時でもコード実行が可能だった問題に対処している。
`--allow-git=none`の利用が推奨されており、npm CLI v12でデフォルトになる予定。
