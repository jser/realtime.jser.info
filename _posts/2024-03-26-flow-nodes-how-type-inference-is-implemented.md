---
title: 'Flow Nodes: How Type Inference Is Implemented'
author: azu
layout: post
itemUrl: 'https://effectivetypescript.com/2024/03/24/flownodes/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/03/index.json'
date: '2024-03-26T14:59:39Z'
tags:
  - TypeScript
  - article
---
TypeScriptのnarrowingがどのように動作しているかについて。
上から下に型を絞り込んでいるのではなく、シンボルが参照されてるポイントから制御フローグラフを逆にたどることで方を絞り込む実装になっている話
