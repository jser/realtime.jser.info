---
title: >-
  Faster TypeScript builds with --isolatedDeclarations by Titian-Cornel
  Cernicova-Dragomir - GitNation
author: azu
layout: post
itemUrl: >-
  https://portal.gitnation.org/contents/faster-typescript-builds-with-isolateddeclarations
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/10/index.json'
date: '2023-10-23T13:09:45Z'
tags:
  - TypeScript
  - video
  - performance
relatedLinks:
  - title: >-
      Isolated declarations by dragomirtitian · Pull Request #53463 ·
      microsoft/TypeScript
    url: 'https://github.com/microsoft/TypeScript/pull/53463'
  - title: >-
      `--isolatedDeclarations` for standalone DTS emit · Issue #47947 ·
      microsoft/TypeScript
    url: 'https://github.com/microsoft/TypeScript/issues/47947'
---
TypeScriptの型定義ファイルの出力をファイルごとに行える`--isolatedDeclarations`オプションを実装しているという話。
現在のTypeScriptの型定義の生成は依存グラフや推論された型に依存している。
いくつかの制限があるがファイルごとに独立して型定義を生成できるようにすることで、他のツールも型定義の生成が可能になり、またファイルごとに並列で処理できるためパフォーマンスが向上するという話。
