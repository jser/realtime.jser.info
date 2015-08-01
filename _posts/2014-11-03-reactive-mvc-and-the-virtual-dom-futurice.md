---
title: Reactive MVC and the Virtual DOM — Futurice
author: azu
layout: post
itemUrl: 'http://futurice.com/blog/reactive-mvc-and-the-virtual-dom'
date: '2014-11-03T14:34:52.178Z'
tags:
  - React
  - Flux
  - VirualDOM
  - デザインパターン
  - JavaScript
relatedLinks:
  - title: 'Reactive MVC and the Virtual DOMのメモ | GH Issue Note'
    url: 'http://efcl.wordpress.com/2014/11/03/reactive-mvc-and-the-virtual-dom%e3%81%ae%e3%83%a1%e3%83%a2/'
  - title: Model-View-Intent and the Virtual DOM
    url: 'http://staltz.com/mvi-freaklies/#/'
---
MVIというReactiveなデザインパターンについて。
MV*と違いControllerを取り除き、代わりにIntentというユーザイベントを扱う仕組みを入れる。
 一方通行にする点などFluxに似ている所はあるが、RxJS等を意識した話。
またVirtual DOMを使い、テストしやすくするためViewと実際の表示を作るRendererに分けている。
最後にReact/Fluxとどのような点が違うのかについて書かれている
