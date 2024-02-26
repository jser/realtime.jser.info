---
title: 'unadlib/mutability: A JavaScript library for transactional mutable updates'
author: azu
layout: post
itemUrl: 'https://github.com/unadlib/mutability'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/02/index.json'
date: '2024-02-26T07:12:50Z'
tags:
  - JavaScript
  - library
relatedLinks:
  - title: >-
      unadlib/mutative: Efficient immutable updates, 2-6x faster than naive
      handcrafted reducer, and more than 10x faster than Immer.
    url: 'https://github.com/unadlib/mutative'
---
Immer的なAPIを提供するmutativeを使い、トランザクションロールバック機能を持ったオブジェクトの更新を行うライブラリ。
オブジェクトの更新処理中に例外が発生した場合は、途中までのオブジェクトの更新は破棄できる。
