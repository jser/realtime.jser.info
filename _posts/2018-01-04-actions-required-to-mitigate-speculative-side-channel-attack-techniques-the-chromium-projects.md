---
title: >-
  Actions Required to Mitigate Speculative Side-Channel Attack Techniques - The
  Chromium Projects
author: azu
layout: post
itemUrl: 'https://sites.google.com/a/chromium.org/dev/Home/chromium-security/ssca'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/01/index.json'
date: '2018-01-04T03:09:02Z'
tags:
  - JavaScript
  - security
  - news
  - browser
relatedLinks:
  - title: Mitigations landing for new class of timing attack | Mozilla Security Blog
    url: >-
      https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/
  - title: >-
      Brian Terlson on Twitter: &#34;Also, it was sad to disable
      SharedArrayBuffer. Here&#39;s hoping it comes back soon and better than
      ever!&#34;
    url: 'https://twitter.com/bterlson/status/948743151883137024'
  - title: Meltdown and Spectre
    url: 'https://spectreattack.com/'
---
ChromeやFirefoxなどはMeltdown/Spectre(CPUプロセッサに関する脆弱性)を受けて、一時的にSharedArrayBufferの無効化や軽減策として`performance.now()`などの挙動を変更する
