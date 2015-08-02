---
title: Design Elements - Chrome V8 — Google Developers
author: azu
layout: post
itemUrl: 'https://developers.google.com/v8/design'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2013/07/index.json'
date: '2013-07-27T13:09:44+00:00'
tags:
  - JavaScript
  - V8
---
JavaScriptエンジンのhidden classについて。
new コンストラクタ関数で値を代入する場合に、操作の差分を持ったHidden classを作成しておき、次回インタンス化するときに、それを再利用する+lookupが減る事で高速化される。
