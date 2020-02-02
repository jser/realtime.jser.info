---
title: >-
  Introducing Yarn 2 ! :star2: - DEV Community
  :woman:‍:computer::man:‍:computer:
author: azu
layout: post
itemUrl: 'https://dev.to/arcanis/introducing-yarn-2-4eh1'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/02/index.json'
date: '2020-02-02T03:48:04Z'
tags:
  - yarn
  - JavaScript
  - npm
  - ReleaseNote
relatedLinks:
  - title: Migration | Yarn - Package Manager
    url: 'https://next.yarnpkg.com/advanced/migration'
  - title: Plug'n'Play | Yarn - Package Manager
    url: 'https://next.yarnpkg.com/features/pnp'
  - title: Zero-Installs | Yarn - Package Manager
    url: 'https://next.yarnpkg.com/features/zero-installs'
---
Yarn 2について。
Yarn v1はlegacyになり、今後のStableはv2(berry)に切り替わる予定。
デフォルトでCacheをリポジトリに配置するように変更、CLIの出力の変更、`npx`と同じような`yarn dlx`の追加、`patch:`/`portal:`の対応。
Workspaceのコマンド改善、Workspaceの検証をするConstraintsの追加。
パッケージごとにビルドするかを設定可能に、`yarn run`でOS間のシェルの違いをノーマライズするように、Lockファイルのフォーマット変更、パッケージはRead-Onlyに変更など
