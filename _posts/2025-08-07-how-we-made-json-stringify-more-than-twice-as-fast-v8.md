---
title: How we made JSON.stringify more than twice as fast · V8
author: azu
layout: post
itemUrl: 'https://v8.dev/blog/json-stringify'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2025/08/index.json'
date: '2025-08-07T14:31:22Z'
tags:
  - V8
  - article
---
V8の`JSON.stringify`の高速化について。
次の条件を満たすときに、stringifyの高速パスが通るようになる

- `JSON.stringify`のオプションを使わない
- `toJSON`を使わない
- Array-likeなオブジェクトを含まない


