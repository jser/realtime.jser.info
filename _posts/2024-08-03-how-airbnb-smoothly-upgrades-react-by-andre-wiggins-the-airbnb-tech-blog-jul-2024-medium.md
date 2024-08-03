---
title: >-
  How Airbnb Smoothly Upgrades React | by Andre Wiggins | The Airbnb Tech Blog |
  Jul, 2024 | Medium
author: azu
layout: post
itemUrl: >-
  https://medium.com/airbnb-engineering/how-airbnb-smoothly-upgrades-react-b1d772a565fd
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/08/index.json'
date: '2024-08-03T07:41:42Z'
tags:
  - React
  - article
---
AirbnbでのReactのアップデートについて。
パッケージのalias機能を使い複数のReactバージョンを利用、SSRを行うサーバもあるため環境変数で使うバージョンを指定。
同じコードから2つのReactバージョンで動くようにして、テストしながら段階的に移行していったという話。
