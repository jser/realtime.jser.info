---
title: Speeding up the dbtTM docs by 20x with React Server Components | Dagster Blog
author: azu
layout: post
itemUrl: 'https://dagster.io/blog/dbt-docs-on-react'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/08/index.json'
date: '2023-08-02T13:24:05Z'
tags:
  - React
  - performance
  - article
---
古いAngularJSと巨大なJSONで動いていた`dbt docs`で生成されるサイトを、Next.jsとReact Server Componentsで置き換える話。
どのように移植したのか、パフォーマンスがどのように改善されたのかについて
