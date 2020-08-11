---
title: 'React v17.0 Release Candidate: No New Features – React Blog'
author: azu
layout: post
itemUrl: 'https://reactjs.org/blog/2020/08/10/react-v17-rc.html'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/08/index.json'
date: '2020-08-11T02:05:15Z'
tags:
  - React
  - ReleaseNote
relatedLinks:
  - title: >-
      reactjs/react-gradual-upgrade-demo: Demonstration of how to gradually
      upgrade an app to a new version of React
    url: 'https://github.com/reactjs/react-gradual-upgrade-demo/'
---
React 17.0 RCリリース。
Reactの内部的な仕組みの更新をしたため、メジャーアップデートしている。
新しいバージョンのReactから古いバージョンReactのルートコンポーネントをLazy Loadして利用できるようにするGradual Upgradesが主な目的。
イベントの仕組みを変更し複数のReactを同一ページ内で動くように、イベントの仕組みが変わったためEvent Poolongを削除、エラー時のコンポーネントスタックの改善など。
