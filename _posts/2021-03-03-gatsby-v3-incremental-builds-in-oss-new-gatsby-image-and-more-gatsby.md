---
title: 'Gatsby v3 Incremental Builds in OSS, new Gatsby Image, and more | Gatsby'
author: azu
layout: post
itemUrl: 'https://www.gatsbyjs.com/blog/gatsby-v3/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/03/index.json'
date: '2021-03-03T02:03:13Z'
tags:
  - React
  - GraphQL
  - ReleaseNote
relatedLinks:
  - title: Migrating from v2 to v3 | Gatsby
    url: >-
      https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/
---
Gatsby 3.0リリース。
破壊的変更としてNode.js 12未満のサポート終了、webpack 5/ESLint 7へアップデート、globalの`graphql`ではなくimportして使うように変更、APIの変更など。
ローカルでは実際にアクセスされたページだけをビルドすることで、全体を再構築せずにビルドできるように
