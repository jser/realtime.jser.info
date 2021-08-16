---
title: Don’t attach tooltips to document.body - Atif Afzal
author: azu
layout: post
itemUrl: 'https://atfzl.com/don-t-attach-tooltips-to-document-body'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/08/index.json'
date: '2021-08-16T13:52:53Z'
tags:
  - JavaScript
  - DOM
  - CSS
  - performance
---
`document.body`直下にツールチップ表示用の要素を追加すると、多くの要素のスタイル更新処理が行われパフォーマンスの問題となった話。
どのようにレイアウト計算の影響を確認したか、ツールチップを表示用の要素をラップすることでスタイル更新の影響範囲を小さくした話
