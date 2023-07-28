---
title: Release Notes for Safari Technology Preview 175 | WebKit
author: azu
layout: post
itemUrl: >-
  https://www.webkit.org/blog/14398/release-notes-for-safari-technology-preview-175/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/07/index.json'
date: '2023-07-28T03:55:44Z'
tags:
  - ReleaseNote
  - safari
relatedLinks:
  - title: 249323 – Make Attr.value/nodeValue/textContent not nullable
    url: 'https://bugs.webkit.org/show_bug.cgi?id=249323'
  - title: >-
      Why can&#039;t Node&#039;s nodeValue use [TreatNullAs=EmptyString]? ·
      Issue #259 · whatwg/dom
    url: 'https://github.com/whatwg/dom/issues/259'
---
Safari Technology Preview 175 リリース。
Service Workerでrequestをリダイレクトした時にHashフラグメントがなくなる問題を修正。
`.nodeValue`と`.textContent`に`null`代入時の動作を他のブラウザと合わせて、`null`を空文字として扱うように変更など
