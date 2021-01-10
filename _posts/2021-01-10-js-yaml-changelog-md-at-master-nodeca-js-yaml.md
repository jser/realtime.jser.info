---
title: js-yaml/CHANGELOG.md at master · nodeca/js-yaml
author: azu
layout: post
itemUrl: 'https://github.com/nodeca/js-yaml/blob/master/CHANGELOG.md#400---2021-01-03'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/01/index.json'
date: '2021-01-10T02:59:20Z'
tags:
  - JavaScript
  - library
  - ReleaseNote
relatedLinks:
  - title: js-yaml/migrate_v3_to_v4.md at master · nodeca/js-yaml
    url: 'https://github.com/nodeca/js-yaml/blob/master/migrate_v3_to_v4.md'
  - title: 'nodeca/js-yaml-js-types: Extra js types for js-yaml'
    url: 'https://github.com/nodeca/js-yaml-js-types'
---
js-yaml 4.0.0リリース。
`safe{Load,LoadAll,Dump}`などを`load`/`loadAll`/`dump`にリネームしsafeメソッドをデフォルトに変更。
unsafeな挙動は外部パッケージの`js-yaml-js-types`に移動、numberのパースをYAML 1.2準拠に変更、`dump`の出力を一部変更など。
その他には`.mjs`のサポート、prototype pollutionに関する挙動の修正など
