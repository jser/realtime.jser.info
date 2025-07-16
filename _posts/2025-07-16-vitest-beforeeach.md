---
title: vitestではbeforeEachを使わない
author: azu
layout: post
itemUrl: 'https://blog.koh.dev/2025-07-11-vitest-beforeeach/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2025/07/index.json'
date: '2025-07-16T14:18:38Z'
tags:
  - vite
  - JavaScript
  - test
  - article
---
beforeEach + letではなく、`test.extends`を使ったTest Contextを使うことで、実際にアクセスするテストケースだけで準備をする方法について
