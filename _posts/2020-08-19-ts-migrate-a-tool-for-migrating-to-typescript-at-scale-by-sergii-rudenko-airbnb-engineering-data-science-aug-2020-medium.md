---
title: >-
  ts-migrate: A Tool for Migrating to TypeScript at Scale | by Sergii Rudenko |
  Airbnb Engineering &amp; Data Science | Aug, 2020 | Medium
author: azu
layout: post
itemUrl: >-
  https://medium.com/airbnb-engineering/ts-migrate-a-tool-for-migrating-to-typescript-at-scale-cd23bfeb5cc
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/08/index.json'
date: '2020-08-19T15:09:46Z'
tags:
  - JavaScript
  - TypeScript
  - article
relatedLinks:
  - title: >-
      airbnb/ts-migrate: A tool to help migrate JavaScript code quickly and
      conveniently to TypeScript
    url: 'https://github.com/airbnb/ts-migrate'
---
JavaScriptからTypeScriptへのマイグレーションを補助する`ts-migrate`について。
`.js`を`.ts`にリネーム、codemodベースでの`any`などの型付け、コンパイルエラーになる部分を`// @ts-expect-error`コメントで抑制していきマイグレーションする。
