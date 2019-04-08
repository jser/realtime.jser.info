---
title: Release 3.13.1 · nodeca/js-yaml
author: azu
layout: post
itemUrl: 'https://github.com/nodeca/js-yaml/releases/tag/3.13.1'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/04/index.json'
date: '2019-04-08T00:35:30Z'
tags:
  - JavaScript
  - library
  - security
  - ReleaseNote
relatedLinks:
  - title: Arbitrary Code Execution in js-yaml | Snyk
    url: 'https://snyk.io/vuln/SNYK-JS-JSYAML-174129'
  - title: >-
      Fix possible code execution in (already unsafe) load() by rlidwka · Pull
      Request #480 · nodeca/js-yaml
    url: 'https://github.com/nodeca/js-yaml/pull/480'
---
js-yaml 3.13.1リリース。
`load()`で悪意のあるyamlファイルを読むと任意のコードを実行できる脆弱性の修正。
