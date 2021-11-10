---
title: Node v17.1.0 (Current) | Node.js
author: azu
layout: post
itemUrl: 'https://nodejs.org/uk/blog/release/v17.1.0/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/11/index.json'
date: '2021-11-10T06:54:45Z'
tags:
  - node.js
  - ReleaseNote
---
Node.js 17.1.0リリース。
ES ModulesのImport AssertionによるJSONのimportができるように。

```js
import fooData from &#039;./foo.json&#039; assert { type: &#039;json&#039; };
```
