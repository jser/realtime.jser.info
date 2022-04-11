---
title: 'Making of: The Sanitizer API (Nullcon 2022) - Google スライド'
author: azu
layout: post
itemUrl: >-
  https://docs.google.com/presentation/d/1eLmIZkY7auD8xT-Q6AzBKM_ASFHH8Z5fMyfeoSbSH-k/view#slide=id.g82761e80df_0_1948
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/04/index.json'
date: '2022-04-11T10:07:43Z'
tags:
  - DOM
  - API
  - security
  - slide
relatedLinks:
  - title: >-
      Sanitizer API creating mock context-element can cause XSS when used in
      different context · Issue #42 · WICG/sanitizer-api
    url: 'https://github.com/WICG/sanitizer-api/issues/42'
  - title: 1669945 - Sanitizer bypass if the sanitized markup is assigned to srcdoc
    url: 'https://bugzilla.mozilla.org/show_bug.cgi?id=1669945'
---
Sanitizer APIについてのスライド。 
DOM XSSを防ぐSanitizer APIがサニタイズしたHTML文字列を返すAPIではない理由、`setHTML` APIについて
