---
title: Release v9.0.0 · npm/cli
author: azu
layout: post
itemUrl: 'https://github.com/npm/cli/releases/tag/v9.0.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/10/index.json'
date: '2022-10-21T01:03:55Z'
tags:
  - npm
  - ReleaseNote
relatedLinks:
  - title: >-
      enhancement: cli should distinguish between stdout and stderr · Issue
      #4724 · npm/cli
    url: 'https://github.com/npm/cli/issues/4724'
---
npm v9.0.0リリース。
Node.js 12のサポート終了、認証方法を扱う`--auth-type`のデフォルトを`&quot;web&quot;`に変更。
`package.json`に`files`フィールドが定義されている場合はルートにある`.gitignore`や`.npmignore`を無視するように変更。
エラーとクラッシュのログを区別し、`--json`をつけた場合でもクラッシュのログはJSONとして出力しないように変更。
`npm access`、`npm birthday`、`npm set-script`、`npm bin`コマンドの削除など
