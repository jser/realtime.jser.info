---
title: A State of Change — On the future of Object.observe
author: azu
layout: post
itemUrl: 'https://markdalgleish.github.io/presentation-a-state-of-change-object-observe/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2014/10/index.json'
date: '2014-10-31T14:36:57Z'
tags:
  - JavaScript
  - slide
relatedLinks:
  - title: The Future of JavaScript MVC Frameworks
    url: 'http://swannodette.github.io/2013/12/17/the-future-of-javascript-mvcs/'
  - title: >-
      presentation-a-state-of-change-object-observe/REFERENCES.md at master ·
      markdalgleish/presentation-a-state-of-change-object-observe
    url: >-
      https://github.com/markdalgleish/presentation-a-state-of-change-object-observe/blob/master/REFERENCES.md
---
Object.observeについてのスライド。
Object.observeはオブジェクトの変更を監視できるが、Imuutabilityとは逆の事になってしまう。
Immutableなしくみを提供するmori等のライブラリや同様にDOMでもStatelessなDOMを提供するReactやVirtual DOMがある。
ただ、全体としてのUI状態を管理するImmutableオブジェクトは必要。

ImmutableなオブジェクトでやるとUndoの実装が簡単になる話。

現在のシンプルなバインディングはMutableデータをStateful DOMへ結びつける。
未来のレンダリングはImmutableデータをStateless DOMにする?
