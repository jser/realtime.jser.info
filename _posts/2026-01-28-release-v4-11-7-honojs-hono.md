---
title: Release v4.11.7 · honojs/hono
author: azu
layout: post
itemUrl: 'https://github.com/honojs/hono/releases/tag/v4.11.7'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/01/index.json'
date: '2026-01-28T00:08:42Z'
tags:
  - Hono
  - ReleaseNote
  - security
---
Hono v4.11.7リリース。
次の問題のセキュリティ修正を含むリリース

- IP制限MiddlewareのIPv4アドレス検証バイパス
- Cache Middlewareでprivateやno-storeなレスポンスがキャッシュされる問題
- Serve Staticミドルウェア(Cloudflare Workers adapter)での内部アセットへのアクセス問題
- hono/jsxのErrorBoundaryでのXSS
