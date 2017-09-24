---
title: >-
  To type or not to type: quantifying detectable bugs in JavaScript | the
  morning paper
author: azu
layout: post
itemUrl: >-
  https://blog.acolyer.org/2017/09/19/to-type-or-not-to-type-quantifying-detectable-bugs-in-javascript/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/09/index.json'
date: '2017-09-24T15:30:33Z'
tags:
  - JavaScript
  - TypeScript
  - flowtype
  - 論文
  - article
relatedLinks:
  - title: 'Type or Not to Type:Quantifying Detectable Bugs in JavaScript'
    url: 'http://ttendency.cs.ucl.ac.uk/projects/type_study/documents/type_study.pdf'
---
JavaScriptに型注釈を加えることでどの程度バグを検出できるかという論文の紹介記事。
GitHubで実際の修正コミットを元に、TSとFlowで型付けし、修正されたバグが検出できるかをテストした。
型注釈をつけることで大体15%のバグは発見できた。
