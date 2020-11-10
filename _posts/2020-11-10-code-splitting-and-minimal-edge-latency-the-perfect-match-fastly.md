---
title: 'Code-splitting and minimal edge latency: the perfect match | Fastly'
author: azu
layout: post
itemUrl: >-
  https://www.fastly.com/blog/code-splitting-and-minimal-edge-latency-the-perfect-match
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/11/index.json'
date: '2020-11-10T02:44:21Z'
tags:
  - React
  - performance
  - article
---
create-react-appで作られたエディタアプリのパフォーマンス改善について。
コードエディタにmonaco-editorを使っているため、chunkのサイズが大きくなっている。
scriptに対しては`prefetch`や`preload`は逆効果になる場合もある問題やread-onlyの場合でもmonaco-editorを読み込んでいる問題について。
read-onlyの場合はPrismJSを使ってシンタックスハイライトだけのコンポーネントにすることでサイズを小さくする話
