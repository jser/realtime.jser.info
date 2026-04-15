---
title: 'Under the hood of MDN&#039;s new frontend'
author: azu
layout: post
itemUrl: 'https://developer.mozilla.org/en-US/blog/mdn-front-end-deep-dive/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/04/index.json'
date: '2026-04-15T11:00:08Z'
tags:
  - mdn
  - WebComponents
  - architecture
  - article
---
MDNのフロントエンドアーキテクチャの刷新についての解説記事。
旧フロントエンド(Yari)はCreate React Appベースで、eject後のwebpack設定の複雑化などの技術的負債を抱えていた。
Sassと最新CSSの混在や、`dangerouslySetInnerHTML`による静的コンテンツの埋め込みなどの課題もあった。
新アーキテクチャではLitベースのWeb Componentsを採用し、独自のServer Components実装でSPAの課題を解決している。
ビルドツールをwebpackからRspackへ移行、Declarative Shadow DOMやBaselineプロジェクトを活用したブラウザ互換性の管理についても解説されている。
