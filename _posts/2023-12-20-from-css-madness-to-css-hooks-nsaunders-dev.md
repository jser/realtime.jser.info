---
title: From CSS madness to CSS Hooks — nsaunders.dev
author: azu
layout: post
itemUrl: 'https://nsaunders.dev/posts/css-madness-to-hooks'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/12/index.json'
date: '2023-12-20T13:18:55Z'
tags:
  - CSS
  - article
relatedLinks:
  - title: CSS Hooks
    url: 'https://css-hooks.com/'
---
CSS Hooksで利用されているCSS Variablesを使ったfallback trickについて。
CSS Variablesでは`initial`が指定されている場合はfallbackが使れ、空の値の場合は空の値が使われる。
この特性を使うことで、CSSだけでプラグラムするようにスタイルのトグルが実現できる。
