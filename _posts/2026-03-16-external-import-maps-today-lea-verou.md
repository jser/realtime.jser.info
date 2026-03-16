---
title: 'External import maps, today! • Lea Verou'
author: azu
layout: post
itemUrl: 'https://lea.verou.me/blog/2026/external-import-maps-today/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/03/index.json'
date: '2026-03-16T12:45:07Z'
tags:
  - JavaScript
  - module
  - article
relatedLinks:
  - title: JSPM - JSPM 4.0 Release
    url: 'https://jspm.org/jspm-4.0-release'
---
External Import Mapsをビルドツールなしで利用する方法について。
`&lt;script type=&quot;importmap&quot;&gt;`をDOMで動的に注入することで、外部ファイルとしてImport Mapを管理できる。`document.currentScript.after()`を使い`&lt;script type=&quot;importmap&quot;&gt;`要素を挿入する。
Chrome 89+/Safari 16.4+/Firefox 108+で動作する。
