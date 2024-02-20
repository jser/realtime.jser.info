---
title: htmz - a low power tool for html
author: azu
layout: post
itemUrl: 'http://leanrada.com/htmz/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/02/index.json'
date: '2024-02-20T01:14:44Z'
tags:
  - HTML
  - JavaScript
  - library
---
htmxのようにHTMLで宣言的にAjax的な表示を行う小さなスニペット。
`&lt;form action=&quot;/default#my-target&quot; target=htmz&gt;`と指定しリクエスト結果を用意した`&lt;iframe name=htmz&gt;`に表示する。
iframeの描画結果を`#my-target`の要素と置換する仕組みなっている。
