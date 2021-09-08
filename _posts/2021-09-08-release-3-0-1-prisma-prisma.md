---
title: Release 3.0.1 · prisma/prisma
author: azu
layout: post
itemUrl: 'https://github.com/prisma/prisma/releases/tag/3.0.1'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/09/index.json'
date: '2021-09-08T14:09:20Z'
tags:
  - database
  - JavaScript
  - library
  - ReleaseNote
---
Prisma 3.0.1リリース。3からSemverにそったリリースとなった。
Referential Actions、Named Constraints、Microsoft SQL/Azure SQL、Node-APIなどがGAとなった。
破壊的な変更として`prisma db seed`の仕組みの変更、`null`をクエリに指定できなくして`JsonNull`/`DbNull`/`AnyNull`のいずれかを使うようにする変更も含まれる。
