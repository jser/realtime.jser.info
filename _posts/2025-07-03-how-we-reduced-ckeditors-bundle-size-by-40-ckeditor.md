---
title: How We Reduced CKEditor’s Bundle Size by 40% | CKEditor
author: azu
layout: post
itemUrl: 'https://ckeditor.com/blog/how-we-reduced-ckeditor-bundle-size/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2025/07/index.json'
date: '2025-07-03T13:26:37Z'
tags:
  - JavaScript
  - bundler
  - article
relatedLinks:
  - title: Sonda
    url: 'https://sonda.dev/'
---
CKEditor 5のbundle size最適化について。
バージョンずれの対策としてre-exportでパッケージをまとめたパッケージを公開していたがtree-shakinが効かずにbundleサイズの問題が起きた。
`/* #__PURE__ */`コメントの活用、ES2022へのtarget変更、`sideEffects`フラグの設定などを行うtree shakingの問題を解決していった話。
また、Sondaを使ったbundle分析について
