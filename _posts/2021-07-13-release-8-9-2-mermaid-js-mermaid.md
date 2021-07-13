---
title: Release 8.9.2 · mermaid-js/mermaid
author: azu
layout: post
itemUrl: 'https://github.com/mermaid-js/mermaid/releases/tag/8.9.2'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/07/index.json'
date: '2021-07-13T05:25:53Z'
tags:
  - JavaScript
  - diagram
  - library
  - ReleaseNote
  - security
relatedLinks:
  - title: '#1106238 Client-Side DOS via Mermaid Prototype Pollution vulnerability'
    url: 'https://hackerone.com/reports/1106238'
---
mermaid 8.9.2で `%%{init: {&lt;JSON_OBJECT&gt;}}%%` の設定記法を使ったXSS脆弱性とPrototype pollutionの脆弱性が修正されている。
