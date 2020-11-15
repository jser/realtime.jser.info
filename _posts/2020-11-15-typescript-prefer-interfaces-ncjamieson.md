---
title: 'TypeScript: Prefer Interfaces — @ncjamieson'
author: azu
layout: post
itemUrl: 'https://ncjamieson.com/prefer-interfaces/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/11/index.json'
date: '2020-11-15T14:20:14Z'
tags:
  - TypeScript
  - article
relatedLinks:
  - title: 10 Insights from Adopting TypeScript at Scale | Tech At Bloomberg
    url: >-
      https://www.techatbloomberg.com/blog/10-insights-adopting-typescript-at-scale/
---
TypeScriptの`type`と`interface`の違いについて。
`interface`は名前で参照されるのに対して、`type`で定義した型はインライン化されることがある。そのため`type`を使った場合に`d.ts`が肥大化する問題について
