---
title: The npm Blog — Binary Planting with the npm CLI
author: azu
layout: post
itemUrl: 'https://blog.npmjs.org/post/189618601100/binary-planting-with-the-npm-cli'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/12/index.json'
date: '2019-12-12T07:25:05Z'
tags:
  - npm
  - yarn
  - ReleaseNote
  - security
relatedLinks:
  - title: Release v1.21.1 · yarnpkg/yarn
    url: 'https://github.com/yarnpkg/yarn/releases/tag/v1.21.1'
---
npm 6.13.3以下とyarn 1.12.0以下で、
悪意あるパッケージをインストールするとシステムのコマンドを書き換えできる脆弱性があった。
npm 6.13.4、yarn 1.12.1でそれぞれ修正されている
