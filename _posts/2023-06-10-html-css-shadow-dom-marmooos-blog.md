---
title: 'HTML 全体の CSS を取得して Shadow DOM に適用する | marmooo&#039;s blog'
author: azu
layout: post
itemUrl: 'https://marmooo.blogspot.com/2023/06/html-css-shadow-dom.html'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/06/index.json'
date: '2023-06-10T13:12:54Z'
tags:
  - CSS
  - WebComponents
  - article
---
`document.styleShets`からスタイルを集めて`replaceSync`でスタイルシートを作り、`shadowRoot.adoptedStyleSheets`でスタイルシートを当てる方法について。
