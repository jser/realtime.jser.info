---
title: RailsアプリのフロントエンドをじわじわとNext.jsにリプレースした話と、その振り返り - High Link テックブログ
author: azu
layout: post
itemUrl: 'https://tech.high-link.co.jp/entry/Rails-application-replace-Next.js'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/04/index.json'
date: '2023-04-03T15:42:48Z'
tags:
  - Next.js
  - rails
  - article
  - JavaScript
---
NginxでパスごとにRailsからNext.jsへリクエストを切り替えながら、移行していったという話。
認証の問題、`&lt;Link&gt;`によるフロントエンドのルーティングとの齟齬の問題など移行時の対応について
