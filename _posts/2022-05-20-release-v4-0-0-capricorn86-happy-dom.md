---
title: Release v4.0.0 · capricorn86/happy-dom
author: azu
layout: post
itemUrl: 'https://github.com/capricorn86/happy-dom/releases/tag/v4.0.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/05/index.json'
date: '2022-05-20T12:17:16Z'
tags:
  - DOM
  - library
  - ReleaseNote
---
Happy DOM v4.0.0リリース。
Void Elementのシリアライズバグを修正。
`&lt;img /&gt;`を`&lt;img&gt;`にシリアライズ、一方でSVG要素は`&lt;circle /&gt;`を`&lt;circle&gt;&lt;/circle&gt;`へとシリアライズするように修正。
