---
title: Declarative partial updates  |  Blog  |  Chrome for Developers
author: azu
layout: post
itemUrl: 'https://developer.chrome.com/blog/declarative-partial-updates'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/06/index.json'
date: '2026-06-07T13:30:05Z'
tags:
  - Chrome
  - HTML
  - WebAPI
  - DOM
  - stream
  - article
---
HTMLを宣言的に部分更新するためのAPIとして提案中の`&lt;template for&gt;`について。
`&lt;template&gt;`要素と`&lt;?marker&gt;`などの処理命令プレースホルダーを使い、ドキュメント内の順序に依存せずコンテンツを配信するOut-of-order streamingについて。
合わせて利用する`setHTML()`/`replaceWithHTML()`/`streamHTML()`などのJavaScript APIについても解説している。
Chrome 148以降のフラグで利用でき、polyfillも実装されている。
