---
title: preactjs/signals
author: azu
layout: post
itemUrl: 'https://github.com/preactjs/signals'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/09/index.json'
date: '2022-09-08T00:09:04Z'
tags:
  - JavaScript
  - React
  - library
  - performance
relatedLinks:
  - title: >-
      Introducing Signals | Preact: Fast 3kb React alternative with the same ES6
      API. Components &amp; Virtual DOM.
    url: 'https://preactjs.com/blog/introducing-signals/'
---
PreactやReactで利用できるステート管理ライブラリ。
Refのような値を含むシグナルオブジェクトを扱い、Propsとして渡しても途中のコンポーネントは再レンダリングをしない。
一方で、値が変化したときにそのSignalを利用しているコンポーネントを再描画できるようにレンダリングの処理をHookする。

