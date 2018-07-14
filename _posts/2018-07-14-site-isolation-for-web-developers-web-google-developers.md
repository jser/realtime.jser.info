---
title: Site Isolation for web developers  |  Web  |  Google Developers
author: azu
layout: post
itemUrl: 'https://developers.google.com/web/updates/2018/07/site-isolation'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/07/index.json'
date: '2018-07-14T14:16:15Z'
tags:
  - Chrome
  - browser
  - security
relatedLinks:
  - title: >-
      Google Online Security Blog: Mitigating Spectre with Site Isolation in
      Chrome
    url: >-
      https://security.googleblog.com/2018/07/mitigating-spectre-with-site-isolation.html
---
Chrome 67でデフォルト有効化されたSite Isolationについて。
レンダラープロセスを分離することで、サイドチャネル攻撃やオリジン超えの攻撃によって機密情報が盗まれるのを防止する。
CORB、iframeなどにおけるloadとunloadにおける挙動の違いなどについて
