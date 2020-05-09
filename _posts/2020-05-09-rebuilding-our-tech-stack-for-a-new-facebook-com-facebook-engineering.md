---
title: Rebuilding our tech stack for a new Facebook.com - Facebook Engineering
author: azu
layout: post
itemUrl: 'https://engineering.fb.com/web/facebook-redesign/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/05/index.json'
date: '2020-05-09T08:50:04Z'
tags:
  - facebook
  - React
  - CSS
  - performance
  - article
---
Facebook.com のりデザインにおけるパフォーマンス改善について。
AtomicなCSSを生成して初期ロードに必要なCSSの削減、`rem`を使ったフォントサイズコントール。
SVGをReactコンポーネントとしてロード、Dynamic Importを使ったコンポーネントの動的ロード、JavaScript Budgetの導入、GraphQLを使ったラウンドトリップの削減など
