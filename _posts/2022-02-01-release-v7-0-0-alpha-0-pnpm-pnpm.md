---
title: Release v7.0.0-alpha.0 · pnpm/pnpm
author: azu
layout: post
itemUrl: 'https://github.com/pnpm/pnpm/releases/tag/v7.0.0-alpha.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/02/index.json'
date: '2022-02-01T02:11:34Z'
tags:
  - npm
  - pnpm
  - ReleaseNote
---
pnpm 7.0.0 αリリース。
破壊的な変更として、`pnpm -r exec|run|add`の対象にRootを含まないように変更、`--filter`がglobを扱うように変更。
`npm run &lt;script&gt;`に対して`--`なしで引数を渡せるように、Side effects cacheがデフォルトで有効化、`pnpm dlx`のaliasとして`pnpx`の追加など
