---
title: 'Svelte 3: Rethinking reactivity'
author: azu
layout: post
itemUrl: 'https://svelte.dev/blog/svelte-3-rethinking-reactivity'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/04/index.json'
date: '2019-04-22T23:34:45Z'
tags:
  - JavaScript
  - library
  - ReleaseNote
---
コンパイル前提のUIフレームワークであるSvelte 3リリース。
今までの仕組みを書き直したため、テンプレート構文、API、ウェブサイトが変更されている。
変更検知の仕組みが大きく変わり、`set` APIではなく、reactiveな変数を`$:`で宣言しコンパイル時に変更を追跡するコードを生成する方法に変更された
