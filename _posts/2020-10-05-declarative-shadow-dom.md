---
title: Declarative Shadow DOM
author: azu
layout: post
itemUrl: 'https://web.dev/declarative-shadow-dom/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/10/index.json'
date: '2020-10-05T14:22:12Z'
tags:
  - WebComponents
  - article
---
Chrome 85に実験フラグ付きで実装されたDeclarative Shadow DOMについて。
`<tempalte>`要素の`showroot`属性で宣言的にShadow Root宣言できる。
SSRの対応、`getInnerHTML()`でのShaowRootの取得、Custom Elementの`attachShadow()`の挙動、細かい挙動の解説など
