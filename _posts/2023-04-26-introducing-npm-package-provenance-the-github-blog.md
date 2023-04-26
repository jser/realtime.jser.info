---
title: Introducing npm package provenance | The GitHub Blog
author: azu
layout: post
itemUrl: 'https://github.blog/2023-04-19-introducing-npm-package-provenance/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/04/index.json'
date: '2023-04-26T12:17:38Z'
tags:
  - npm
  - security
  - article
relatedLinks:
  - title: Introducing npm package SLSA provenance support | Open Source Insights
    url: 'https://blog.deps.dev/npm-provenance/'
---
npmパッケージが、どのソースコードのコミット、ビルドの設定なのかのprovenanceを紐づけられる`--provenance`フラグをサポート。
現在はGitHub Actionsからのpublishにおける紐付けをサポートしてる。
サプライチェーンの問題が起きた時に、パッケージに含まれるprovenanceをチェックすることで、整合性がチェックできる
