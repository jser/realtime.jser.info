---
title: Improved Next.js and Gatsby page load performance with granular chunking
author: azu
layout: post
itemUrl: 'https://web.dev/granular-chunking-nextjs/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/05/index.json'
date: '2020-05-07T04:32:10Z'
tags:
  - webpack
  - article
relatedLinks:
  - title: >-
      feat(gatsby): enable granular chunks by wardpeet · Pull Request #22253 ·
      gatsbyjs/gatsby
    url: 'https://github.com/gatsbyjs/gatsby/pull/22253'
---
webpackの`SplitChunksPlugin`を行うことでNext.js 9.2やGatsbyのページ間でのCommon chunkを分けた話。
HTTP/2における`maxInitialRequests`の設定によるcリクエスト数の増加の影響調査、ルーティングとchunkの分離についてなど
