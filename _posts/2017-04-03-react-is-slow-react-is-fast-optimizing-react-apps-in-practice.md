---
title: 'React is Slow, React is Fast: Optimizing React Apps in Practice'
author: azu
layout: post
itemUrl: 'http://marmelab.com/blog/2017/02/06/react-is-slow-react-is-fast.html'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/04/index.json'
date: '2017-04-03T06:37:54Z'
tags:
  - React
  - performance
relatedLinks:
  - title: >-
      garbles/why-did-you-update: Puts your console on blast when React is
      making unnecessary updates.
    url: 'https://github.com/garbles/why-did-you-update'
---
Reactのパフォーマンス計測と改善について。
`?react_perf`を使いコンポーネントプロファイル、`why-did-you-update`でのコンポーネントの更新時間の計測。
shouldComponentUpdateでの無駄な更新を排除することでの改善、RecomposeやReselect、React/JSXの使い方での改善について
