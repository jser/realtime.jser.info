---
title: Fixing Top-Level Await in Safari | WebKit
author: azu
layout: post
itemUrl: 'https://webkit.org/blog/18227/fixing-top-level-await-in-safari/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/09/index.json'
date: '2026-09-10T12:48:16Z'
tags:
  - safari
  - JavaScript
  - article
---
Safari 27/Safari Technology Preview 251でのTop-Level Awaitの修正について。
SafariのModule LoaderをJavaScript実装からC++実装へ書き直し、ECMAScript仕様に沿って、Top-Level Awaitに対応した
