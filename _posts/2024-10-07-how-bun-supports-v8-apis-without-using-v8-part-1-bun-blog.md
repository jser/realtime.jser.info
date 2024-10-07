---
title: How Bun supports V8 APIs without using V8 (part 1) | Bun Blog
author: azu
layout: post
itemUrl: 'https://bun.sh/blog/how-bun-supports-v8-apis-without-using-v8-part-1'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/10/index.json'
date: '2024-10-07T16:12:04Z'
tags:
  - Bun
  - V8
  - webkit
  - C++
  - article
---
BunがどのようにV8 APIをJSC上に実装しているかについて。
C++のポインタ、レイアウトの互換性のレイヤー、V8とJSCの値の表現の違い、NaNボクシング、GC、メモリレイアウトについて
