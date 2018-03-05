---
title: hyperHTMLやlit-htmlが効率的に再描画を行う仕組み - Qiita
author: azu
layout: post
itemUrl: 'https://qiita.com/rikuba/items/92da6d99e2b0f831cc65'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/03/index.json'
date: '2018-03-05T01:19:20Z'
tags:
  - JavaScript
  - DOM
  - library
---
hyperHTMLやlit-htmlのDOM更新の仕組みについて。
タグ付きテンプレート関数を使い、初回時に更新時はどの位置の要素を更新するかをマッピング、更新時はマッピングを元に要素/値の更新だけを行う。
またテンプレートのキャッシュを利用し無駄なパースを避けるなどの工夫について。
