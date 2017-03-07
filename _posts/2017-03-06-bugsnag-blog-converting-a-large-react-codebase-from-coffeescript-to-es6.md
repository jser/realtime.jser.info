---
title: Bugsnag Blog - Converting a large React Codebase from Coffeescript to ES6
author: azu
layout: post
itemUrl: >-
  http://blog.bugsnag.com/converting-a-large-react-codebase-from-coffeescript-to-es6/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/03/index.json'
date: '2017-03-06T10:29:23Z'
tags:
  - CoffeeScript
  - JavaScript
  - React
  - article
relatedLinks:
  - title: >-
      jsdf/coffee-react-transform: DEPRECATED – Provides React JSX support for
      Coffeescript
    url: 'https://github.com/jsdf/coffee-react-transform'
  - title: 'reactjs/react-codemod: React codemod scripts'
    url: 'https://github.com/reactjs/react-codemod#create-element-to-jsx'
  - title: >-
      bugsnag/depercolator: Tool for converting coffeescript to idiomatic
      javascript and JSX
    url: 'https://github.com/bugsnag/depercolator'
---
coffee-react(cjsx)からJavaScriptへのマイグレーションについての記事。
decaffeinateはcjsxをサポートしていないため、`React.createElement`ベースのJSに変換し、react codemod toolでJSXに再変換する。
変換したコードベースを`prettier`で整形し、`eslint`で細かいところを直す。
それらをまとめた`Depercolator`というツールを作った話
