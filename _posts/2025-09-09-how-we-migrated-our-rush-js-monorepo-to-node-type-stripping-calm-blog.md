---
title: How we migrated our Rush.js monorepo to Node type stripping — Calm Blog
author: azu
layout: post
itemUrl: >-
  https://blog.calm.com/engineering/how-we-migrated-our-rushjs-monorepo-to-node-type-stripping
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2025/09/index.json'
date: '2025-09-09T08:15:56Z'
tags:
  - nodejs
  - TypeScript
  - article
---
TypeSccriptで書かれたNode.jsアプリケーションのコードベースをどのようにtype strippingに移行したかについて。
monorepoと`node_modules`にコードがあるため、`node --experimental-strip-types`が効かないが、`--conditions`で参照するパスを解決している。
ESMへの移行、stub、CJSの対応、`erasableSyntaxOnly`で未対応の構文の対応などを行い、`node --experimental-strip-types`で実行できるようにした話。
