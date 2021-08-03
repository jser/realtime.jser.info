---
title: >-
  1065085 - Implement window.{alert, prompt, confirm} removal from cross-origin
  iframes - chromium
author: azu
layout: post
itemUrl: 'https://bugs.chromium.org/p/chromium/issues/detail?id=1065085'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/08/index.json'
date: '2021-08-03T00:49:54Z'
tags:
  - Chrome
  - security
  - DOM
  - news
relatedLinks:
  - title: >-
      Remove alert(), confirm(), and prompt for cross origin iframes - Chrome
      Platform Status
    url: 'https://www.chromestatus.com/feature/5148698084376576'
  - title: >-
      Proposal: Disallow cross-origin iframes usage of window.{alert, confirm,
      prompt} · Issue #5407 · whatwg/html
    url: 'https://github.com/whatwg/html/issues/5407'
  - title: >-
      google chrome - JavaScript dialogs alert(), confirm() and prompt() in
      cross origin iframe does not work any longer - Stack Overflow
    url: >-
      https://stackoverflow.com/questions/68492434/javascript-dialogs-alert-confirm-and-prompt-in-cross-origin-iframe-does-n
  - title: Chrome Enterprise release notes - Google Chrome Enterprise Help
    url: 'https://support.google.com/chrome/a/answer/7679408#92&zippy=%2Cchrome'
  - title: 'Intent to Remove: Cross origin subframe JS Dialogs'
    url: >-
      https://groups.google.com/a/chromium.org/g/blink-dev/c/hTOXiBj3D6A/m/gFXmgIz9AwAJ
  - title: Cross Origin iframe からの alert/confirm/prompt 呼び出しの無効化 | blog.jxck.io
    url: 'https://blog.jxck.io/entries/2021-08-02/3rd-party-iframe-dialog.html'
---
Chrome 92でcross origin iframeからのalert/dialog/promptが無効化された。
回避方法として、Chrome 96まで有効なReverse Origin Trial、ダイアログUIを自作する方法、postMessageを使って親ドキュメントでダイアログを出す方法など。
