---
title: Release v3.0.1 · mishoo/UglifyJS2
author: azu
layout: post
itemUrl: 'https://github.com/mishoo/UglifyJS2/releases/tag/v3.0.1'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/05/index.json'
date: '2017-05-08T15:47:29Z'
tags:
  - JavaScript
  - library
  - ReleaseNote
relatedLinks:
  - title: >-
      unify CLI &amp; API under `minify()` by alexlamsl · Pull Request #1811 ·
      mishoo/UglifyJS2
    url: 'https://github.com/mishoo/UglifyJS2/pull/1811'
  - title: 'drop `angular` by alexlamsl · Pull Request #1812 · mishoo/UglifyJS2'
    url: 'https://github.com/mishoo/UglifyJS2/pull/1812'
  - title: 'maybe https://github.com/mishoo/UglifyJS2/releases'
    url: 'https://gist.github.com/azu/80d9b2e5f6ee42b2e78b73610c9c6967'
---
UglifyJS 3.0リリース。
`--prefix`や`angular`オプションなどの削除、`screw_ie8`が`ie8`にリネームなど様々な破壊的変更が含まれている。
`minify()`から`fs`依存が取り除かれ、結果をASTとして吐き出せるようになるなど
