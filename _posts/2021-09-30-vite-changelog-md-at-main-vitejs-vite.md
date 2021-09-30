---
title: vite/CHANGELOG.md at main · vitejs/vite
author: azu
layout: post
itemUrl: >-
  https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md#260-2021-09-29
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/09/index.json'
date: '2021-09-30T12:29:31Z'
tags:
  - vite
  - ReleaseNote
relatedLinks:
  - title: >-
      feat: default build.minify to esbuild by yyx990803 · Pull Request #5041 ·
      vitejs/vite
    url: 'https://github.com/vitejs/vite/pull/5041'
  - title: >-
      feat: async script module support, close #3163 by patak-js · Pull Request
      #4864 · vitejs/vite
    url: 'https://github.com/vitejs/vite/pull/4864'
  - title: 'feat: support .astro files by drwpow · Pull Request #5038 · vitejs/vite'
    url: 'https://github.com/vitejs/vite/pull/5038'
  - title: >-
      feat: pre transform direct imports before requests hit the server by
      yyx990803 · Pull Request #5037 · vitejs/vite
    url: 'https://github.com/vitejs/vite/pull/5037'
---
Vite 2.6.0リリース。
デフォルトのminifyをterserからesbuildに変更、script要素の`async`属性のサポート、
`.astro`のサポート。
また、importしているファイルが別のファイルをimportするように連鎖しているケースで、連鎖的にimportされるファイルを事前にtransformする仕組みの追加など
