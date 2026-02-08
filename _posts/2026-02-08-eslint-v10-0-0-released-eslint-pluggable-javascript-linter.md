---
title: ESLint v10.0.0 released - ESLint - Pluggable JavaScript Linter
author: azu
layout: post
itemUrl: 'https://eslint.org/blog/2026/02/eslint-v10.0.0-released/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/02/index.json'
date: '2026-02-08T12:42:18Z'
tags:
  - ESLint
  - ReleaseNote
relatedLinks:
  - title: Migrate to v10.x - ESLint - Pluggable JavaScript Linter
    url: 'https://eslint.org/docs/latest/use/migrate-to-10.0.0'
---
ESLint v10.0.0リリース。
Node.js v20.19.0未満のサポートを終了。
`.eslintrc.*`や`.eslintignore`、`/* eslint-env */`コメントなどeslintrc関連の機能を削除。
設定ファイルの検索をlint対象ファイルのディレクトリから開始するように変更、JSX識別子を参照として追跡するように変更。
`context.getCwd()`などの非推奨のRule Context APIを削除。
`RuleTester`に`requireMessage`/`requireLocation`/`requireData`オプションの追加、`eslint:recommended`の更新など
