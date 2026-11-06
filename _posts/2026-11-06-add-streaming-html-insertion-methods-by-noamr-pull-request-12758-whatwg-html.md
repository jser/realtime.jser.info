---
title: >-
  Add streaming HTML insertion methods by noamr · Pull Request #12758 ·
  whatwg/html
author: azu
layout: post
itemUrl: 'https://github.com/whatwg/html/pull/12758?overview=true'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/11/index.json'
date: '2026-11-06T23:52:58Z'
tags:
  - HTML
  - DOM
  - WebAPI
  - WHATWG
  - spec
---
HTMLをストリーミングで解析し、DOMへ段階的に挿入するAPIをHTML仕様に。
`Element.streamHTML()`/`streamAppendHTML()`などが`WritableStream`を返し、Streamへ書き込まれたHTML文字列をHTMLとして挿入する。
危険な要素や属性を除去するメソッドと、除去を既定で行わない`Unsafe`版を用意する。
