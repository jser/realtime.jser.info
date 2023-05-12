---
title: 'jQuery 3.7.0 Released: Staying in Order | Official jQuery Blog'
author: azu
layout: post
itemUrl: 'https://blog.jquery.com/2023/05/11/jquery-3-7-0-released-staying-in-order/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/05/index.json'
date: '2023-05-12T00:07:15Z'
tags:
  - 'jquery]'
  - ReleaseNote
---
jQuery 3.7.0リリース。
`uniqueSort`メソッドの追加、単位なしのCSSプロパティのサポート、パフォーマンスの改善。

IEでは`focus`/`blur`が非同期で実行されるが、他のブラウザでは同期的に実行されるため、挙動の違いが発生していた。
IEでも同期的に実行される`focusin`/`focusout`を使いシミュレートすることで修正された。
