---
title: The uphill climb of making diff lines performant - The GitHub Blog
author: azu
layout: post
itemUrl: >-
  https://github.blog/engineering/architecture-optimization/the-uphill-climb-of-making-diff-lines-performant/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/04/index.json'
date: '2026-04-12T14:52:57Z'
tags:
  - GitHub
  - React
  - performance
  - article
---
GitHubのFiles changedタブのReactベースの実装におけるdiff行のパフォーマンス最適化について。
1行あたり10〜15個のDOM要素と8〜13個のReactコンポーネントが必要だった構造を最適化している。
コンポーネント数を2個に削減し、イベントハンドラをdata属性を活用した単一のハンドラに集約するなどの変更をした。
TanStack Virtualによる仮想化の導入、重いCSSセレクタの削除、ドラッグ/リサイズ処理の再実装などでパフォーマンスを改善している。
