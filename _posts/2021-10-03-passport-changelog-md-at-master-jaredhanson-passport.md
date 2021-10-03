---
title: passport/CHANGELOG.md at master · jaredhanson/passport
author: azu
layout: post
itemUrl: >-
  https://github.com/jaredhanson/passport/blob/master/CHANGELOG.md#050---2021-09-23
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/10/index.json'
date: '2021-10-03T14:01:05Z'
tags:
  - node.js
  - express
  - library
  - ReleaseNote
relatedLinks:
  - title: Comparing v0.4.1...v0.5.0 · jaredhanson/passport
    url: 'https://github.com/jaredhanson/passport/compare/v0.4.1...v0.5.0'
---
Passport 0.5リリース。
破壊的な変更として`IncomingMessage`をprototype拡張して`login()`などを追加するmonkey patchが削除された。
代わりに`app.use(passport.initialize())`のようにmiddlewareとして拡張するように変更など
