---
title: Porting 30K lines of code from Flow to TypeScript
author: azu
layout: post
itemUrl: 'https://davidgom.es/porting-30k-lines-of-code-from-flow-to-typescript/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/01/index.json'
date: '2019-01-20T13:23:31Z'
tags:
  - flowtype
  - TypeScript
  - article
relatedLinks:
  - title: What I wish I had known before starting to use Flow
    url: 'https://davidgom.es/what-i-wish-i-had-known-before-starting-to-use-flow/'
---
3万行のFlowのコードをTypeScriptへ移行した話。
元々tcombによるRuntime CheckからFlowへ移行し、Babel 7 + TypeScript presetへ移行した話。
`tsc`を型チェッカーとして利用し、どのようにFlowからTypeScriptへ移行していったかについて。
また移行した結果サードパーティの型定義の改善などから、型のカバレッジが向上した話など
