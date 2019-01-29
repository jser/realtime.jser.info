---
title: >-
  Parsing of `import()` fails in 4.29.0 (Compilation issue, related to dynamic
  import) · Issue #8656 · webpack/webpack
author: azu
layout: post
itemUrl: 'https://github.com/webpack/webpack/issues/8656'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/01/index.json'
date: '2019-01-29T01:45:48Z'
tags:
  - webpack
  - npm
  - issue
relatedLinks:
  - title: >-
      install/dedupe: fix hoisting of packages with peerDeps by sokra · Pull
      Request #147 · npm/cli
    url: 'https://github.com/npm/cli/pull/147'
---
webpack 4.29.0 + npmで`import()`が失敗する問題について。
npmがacorn + acorn-dynamic-importのpeerDependencyの関係を無視したhoistを行うバグにより、`import()`がパースできなくなる。yarnでは発生していない、npmに修正のPull Requestがでている。
