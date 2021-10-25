---
title: >-
  Yarn 3.1 :jack_o_lantern::ghost: Corepack, ESM, pnpm, Optional Packages ... -
  DEV Community :woman:‍:computer::man:‍:computer:
author: azu
layout: post
itemUrl: 'https://dev.to/arcanis/yarn-31-corepack-esm-pnpm-optional-packages--3hak'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/10/index.json'
date: '2021-10-25T15:35:20Z'
tags:
  - yarn
  - ReleaseNote
relatedLinks:
  - title: berry/CHANGELOG.md at master · yarnpkg/berry
    url: 'https://github.com/yarnpkg/berry/blob/master/CHANGELOG.md#310'
  - title: >-
      Different strategy for installing platform-specific binaries · Issue #789
      · evanw/esbuild
    url: 'https://github.com/evanw/esbuild/issues/789#issuecomment-901467782'
---
Yarn 3.1リリース。
`yarn init -2`でCorepackの対応、PnPでのEMSサポート、`nodeLinker: pnpm`のサポート。
`optionalDependencies`で指定したアーキテクチャだけをダウンロードする`supportedArchitectures`の設定を追加、`wrokspaces`コマンドに`--since`フラグの追加
