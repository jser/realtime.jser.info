---
title: Implementing single-file Web Components
author: azu
layout: post
itemUrl: 'https://ckeditor.com/blog/implementing-single-file-web-components/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/03/index.json'
date: '2020-03-24T00:05:17Z'
tags:
  - JavaScript
  - WebComponents
  - article
---
Web ComponentsでVueのようなSingle file componentを実装する記事。
コンポーネントをFetchし、ファイル内をパースしてTemplate、CSS、JavaScriptを取りだす。
Scriptを`import`するために、データURLからBlobを作成しModuleとして読み込むハックについてなど
