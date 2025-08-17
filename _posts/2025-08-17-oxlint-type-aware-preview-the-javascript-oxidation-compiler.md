---
title: Oxlint Type-Aware Preview | The JavaScript Oxidation Compiler
author: azu
layout: post
itemUrl: 'https://oxc.rs/blog/2025-08-17-oxlint-type-aware'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2025/08/index.json'
date: '2025-08-17T14:52:38Z'
tags:
  - TypeScript
  - ESLint
  - article
relatedLinks:
  - title: 'oxc-project/tsgolint: Type aware linting for oxlint'
    url: 'https://github.com/oxc-project/tsgolint'
  - title: 'web-infra-dev/rslint: :rocket: Go Faster. Go Typed'
    url: 'https://github.com/web-infra-dev/rslint'
---
`tsgolint`のforkをOxlintと統合して、Oxlintで型情報を使ったTypeScriptのLintをサポート。
`typescript-go`にパッチを当てたものを利用するため、TypeScriptのバージョンに合わせたバージョンをインストールする必要がある。
