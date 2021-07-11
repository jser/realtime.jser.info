---
title: 'npm audit: Broken by Design — Overreacted'
author: azu
layout: post
itemUrl: 'https://overreacted.io/npm-audit-broken-by-design/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/07/index.json'
date: '2021-07-11T14:10:30Z'
tags:
  - npm
  - node.js
  - library
  - opinion
  - article
---
devDependenciesとして使うツールにおけるnpm auditの報告がReDoSの脆弱性になってしまっている問題について。
本番で動くdependenciesのみをチェックする`npm audit --production`、公開するパッケージをインライン化する方法、エコシステム的な問題提起など
