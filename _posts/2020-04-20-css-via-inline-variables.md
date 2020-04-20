---
title: CSS via inline variables
author: azu
layout: post
itemUrl: 'https://codepen.io/WebReflection/pen/gOawwew'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/04/index.json'
date: '2020-04-20T14:29:13Z'
tags:
  - CSS
  - HTML
  - example
relatedLinks:
  - title: >-
      (20) Andrea Giammarchi on Twitter: &quot;a legitimate use case for inline
      style attribute is, imho, variables declarations: • if the user disabled
      CSS, no layout changes • it's SSR compatible out of the box, no Shadow DOM
      needed • it doesn't shadow !important, but you could add !important
      https://t.co/gBaPjlYvMS https://t.co/T5Tewjh2dD&quot; / Twitter
    url: 'https://twitter.com/WebReflection/status/1252172398406877185'
---
`style`属性にCSS Custom Propertiesを定義して、CSS側でCSS Custom Propertiesの変数の読み取りと初期値を指定するパターン。
利用側でCSS値をinjectできる仕組み
