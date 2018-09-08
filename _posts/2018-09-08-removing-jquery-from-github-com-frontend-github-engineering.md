---
title: Removing jQuery from GitHub.com frontend | GitHub Engineering
author: azu
layout: post
itemUrl: 'https://githubengineering.com/removing-jquery-from-github-frontend/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/09/index.json'
date: '2018-09-08T04:09:08Z'
tags:
  - github
  - jQuery
  - JavaScript
  - WebComponents
  - article
relatedLinks:
  - title: >-
      dgraham/eslint-plugin-jquery: Disallow jQuery functions with native
      equivalents.
    url: 'https://github.com/dgraham/eslint-plugin-jquery#readme'
---
GitHubがjQueryの依存を外すまでの話。
jQueryの機能はウェブ標準で代替できるものが増え、また一部のjQueryのメソッドチェーンには意図通りではない挙動があった。
コードで使われてる`jQuery`のメトリクスをとり可視化、ESLintを使ってjQueryの利用をCIでチェック、Polyfillを使うなどしてウェブ標準の実装に置き換えていった話。
