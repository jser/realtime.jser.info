---
title: Announcing key advances to JavaScript performance in Windows 10 Technical Preview - IEBlog - Site Home - MSDN Blogs
author: azu
layout: post
itemUrl: 'http://blogs.msdn.com/b/ie/archive/2014/10/09/announcing-key-advances-to-javascript-performance-in-windows-10-technical-preview.aspx'
date: '2014-10-19T13:29:35.311Z'
tags:
  - IE
  - JavaScript
relatedLinks:
  - title: 'Baseline コンパイラを導入しました | Mozilla Developer Street (modest)'
    url: 'https://dev.mozilla.jp/2013/04/the-baseline-compiler-has-landed/'
---
IEのJavaScriptエンジンであるChakraの最適化について。baseline的なASTを中間層としてJITコンパイル。
最適化として、オブジェクトの同値の場合にインラインキャッシュ、コードのインライン化、Arrayアクセスの最適化、mark&sweep GCの改善等
