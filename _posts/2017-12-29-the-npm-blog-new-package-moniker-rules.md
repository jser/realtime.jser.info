---
title: The npm Blog — New Package Moniker rules
author: azu
layout: post
itemUrl: 'http://blog.npmjs.org/post/168978377570/new-package-moniker-rules'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/12/index.json'
date: '2017-12-29T02:02:18Z'
tags:
  - npm
  - news
  - security
relatedLinks:
  - title: validate-npm-package-name
    url: 'https://www.npmjs.com/package/validate-npm-package-name'
---
npmにパッケージをpublishする際のルールが変更された。
パッケージ名に含まれる`.`、`-`、`_`の違いによる区別をしなくなった。
`react-native`と`react.native`を同じものとして扱い、タイプミスを狙った類似パッケージの公開を防止する目的。
