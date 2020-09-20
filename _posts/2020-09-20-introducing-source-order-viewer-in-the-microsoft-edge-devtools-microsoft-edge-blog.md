---
title: >-
  Introducing Source Order Viewer in the Microsoft Edge DevTools - Microsoft
  Edge Blog
author: azu
layout: post
itemUrl: >-
  https://blogs.windows.com/msedgedev/2020/09/15/source-order-viewer-edge-devtools/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/09/index.json'
date: '2020-09-20T13:55:36Z'
tags:
  - MSEdge
  - Chrome
  - debug
  - article
  - accessibility
relatedLinks:
  - title: Source Order Matters | Adrian Roselli
    url: 'https://adrianroselli.com/2015/09/source-order-matters.html'
  - title: Source Order Viewer in Canary | Adrian Roselli
    url: 'https://adrianroselli.com/2020/08/source-order-viewer-in-canary.html'
  - title: 'C27: Making the DOM order match the visual order | Techniques for WCAG 2.0'
    url: 'https://www.w3.org/TR/WCAG20-TECHS/C27.html'
  - title: 'C27: DOM の順序を表示順序と一致させる | WCAG 2.0 達成方法集'
    url: 'https://waic.jp/docs/WCAG-TECHS/C27'
---
MSEdge/Chrome 85に実験的な機能として要素のソースコードにおける順番を表示する機能が追加された。
CSS Grid/FlexboxなどのCSSの機能で要素の順番を変更しやすくなったため、スクリーンリーダーなどの読み上げで問題が起きるケースを分かりやすくデバッグする機能。
WCAG C27の"DOMの順序を表示順序と一致させる"の実装をデバッグする目的の機能。
