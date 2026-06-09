---
title: Upcoming breaking changes for npm v12 - GitHub Changelog
author: azu
layout: post
itemUrl: >-
  https://github.blog/changelog/2026-06-09-upcoming-breaking-changes-for-npm-v12/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/06/index.json'
date: '2026-06-09T22:50:37Z'
tags:
  - npm
  - security
  - CLI
  - article
---
npm v12で予定されている破壊的変更の解説。2026年7月リリース予定のnpm v12では、サプライチェーン攻撃対策として、ライフサイクルスクリプトの実行が変更される。
preinstall/install/postinstallなどのスクリプトがデフォルトで実行されなくなり、`npm approve-scripts`で承認したパッケージのみ実行される。
`--allow-git`/`--allow-remote`のデフォルトが`none`となり、Git依存やリモートURLからの依存解決が明示的な許可なしでは行われなくなる。
