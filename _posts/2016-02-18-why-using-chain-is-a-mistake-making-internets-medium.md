---
title: Why using `_.chain` is a mistake. — Making Internets — Medium
author: azu
layout: post
itemUrl: 'https://medium.com/making-internets/why-using-chain-is-a-mistake-9bc1f80d51ba'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2016/02/index.json'
date: '2016-02-18T08:57:03+00:00'
tags:
  - JavaScript
  - library
---
lodashの`_.chanin`は拡張が難しい、lodashに含めることでbundleサイズが大きいという問題がある。
4.1から`lodash/fp`にfunctionalな関数が用意されており、同等の表現はより小さなbundleサイズで実現できるという話
