---
title: Behind The Scenes of Bun Install | Bun Blog
author: azu
layout: post
itemUrl: 'https://bun.com/blog/behind-the-scenes-of-bun-install'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2025/09/index.json'
date: '2025-09-14T12:59:52Z'
tags:
  - Bun
  - article
  - performance
---
パッケージインストールのボトルネックはI/OではなくSystem Call数にあるという話。
user modeとkernel modeの切り替えにはコストがかかりパッケージインストール時はオーバヘッドが多く発生する。
`bun install`ではこのSystem Call数をメトリクスとして使ってパフォーマンスを改善していっているという話
