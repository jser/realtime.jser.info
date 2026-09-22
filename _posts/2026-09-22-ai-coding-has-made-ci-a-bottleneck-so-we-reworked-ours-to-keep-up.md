---
title: 'AI coding has made CI a bottleneck, so we reworked ours to keep up'
author: azu
layout: post
itemUrl: 'https://linear.app/now/ci-bottleneck-reworked'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/09/index.json'
date: '2026-09-22T12:11:49Z'
tags:
  - CI
  - testing
  - article
  - TypeScript
---
LinearでのCI改善として、`tsgo`への移行、ESLintルールを型情報に依存しないように変更。
また、サードパーティランナーと`actions/checkout`の調整、pnpmの依存インストール範囲の限定、Vitestのshard分割や`isolate: false`の導入などについて
