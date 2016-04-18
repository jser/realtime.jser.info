---
title: ecmascript-6-destructuring-gotcha
author: azu
layout: post
itemUrl: 'https://www.nczonline.net/blog/2015/10/ecmascript-6-destructuring-gotcha/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2015/10/index.json'
date: '2015-10-25T11:09:09Z'
tags:
  - ECMAScript
  - spec
---
`let {} = {};` がES6でvalidであるというのは混乱を起こすのではという話。
現在、EMCAScript仕様のIssueとして修正するべきかが議論されている。

- [Destructuring declarations that bind nothing should probably be an early error · Issue #97 · tc39/ecma262](https://github.com/tc39/ecma262/issues/97 "Destructuring declarations that bind nothing should probably be an early error · Issue #97 · tc39/ecma262")
