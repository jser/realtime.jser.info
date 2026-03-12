---
title: 'RedwoodSDK 1.0: Getting Out of the Weeds | Blog | RedwoodSDK'
author: azu
layout: post
itemUrl: 'https://rwsdk.com/blog/redwood-v1-getting-out-of-the-weeds'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/03/index.json'
date: '2026-03-12T10:30:08Z'
tags:
  - cloudflare
  - React
  - library
  - ReleaseNote
relatedLinks:
  - title: Release v1.0.0 · redwoodjs/sdk
    url: 'https://github.com/redwoodjs/sdk/releases/tag/v1.0.0'
---
Cloudflare Workers向けのReactフレームワークであるRedwoodSDK 1.0リリース。
旧RedwoodJSから方針を転換し、コード生成や暗黙的な規約に依存しない設計となっている。
Web標準API(fetch, Request, Response)をそのまま利用し、設定より合成(Composability)を重視するアーキテクチャを採用している。
