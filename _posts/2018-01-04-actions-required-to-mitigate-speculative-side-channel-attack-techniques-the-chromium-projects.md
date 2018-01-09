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
  - title: Meltdown and Spectre
    url: 'https://spectreattack.com/'
  - title: >-
      Mitigating speculative execution side-channel attacks in Microsoft Edge
      and Internet Explorer - Microsoft Edge Dev BlogMicrosoft Edge Dev Blog
    url: >-
      https://blogs.windows.com/msedgedev/2018/01/03/speculative-execution-mitigations-microsoft-edge-internet-explorer/#m2GyZlsjAzq0Do6K.97
  - title: What Spectre and Meltdown Mean For WebKit | WebKit
    url: 'https://webkit.org/blog/8048/what-spectre-and-meltdown-mean-for-webkit/'
---
Chrome、Firefox、MSEdge、SafariなどのブラウザはMeltdown/Spectre(CPUプロセッサに関する脆弱性)を受ける。
そのためSharedArrayBufferの無効化や軽減策として`performance.now()`などの挙動を変更する
