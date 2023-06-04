---
title: JavaScript Macros in Bun | Bun Blog
author: azu
layout: post
itemUrl: 'https://bun.sh/blog/bun-macros'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/06/index.json'
date: '2023-06-04T23:06:32Z'
tags:
  - Bun
  - article
---
Bun 0.6.0で実装されたbundlerを使ったbundle時のマクロ展開について。
`import ... with { type: &#039;micro&#039; }`でマクロとして読み込み、bundle時にそのモジュールの評価結果を埋め込む機能。

