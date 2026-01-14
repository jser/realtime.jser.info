---
title: 'Node.js — Tuesday, January 13, 2026 Security Releases'
author: azu
layout: post
itemUrl: 'https://nodejs.org/en/blog/vulnerability/december-2025-security-releases'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/01/index.json'
date: '2026-01-14T13:15:31Z'
tags:
  - nodejs
  - security
  - ReleaseNote
relatedLinks:
  - title: >-
      Node.js — Mitigating Denial-of-Service Vulnerability from Unrecoverable
      Stack Space Exhaustion for React, Next.js, and APM Users
    url: >-
      https://nodejs.org/en/blog/vulnerability/january-2026-dos-mitigation-async-hooks
---
Node.js 20.20.0/22.22.0/24.13.0/25.3.0のセキュリティリリース。
8件の脆弱性が修正されている。
`Buffer.alloc`や`TypedArray`が初期化されていないメモリを含む可能性があるRace Conditionの修正（CVE-2025-55131）。
シンボリックリンクを使ったPermission Modelのバイパスの修正（CVE-2025-55130）。
不正なHTTP/2 HEADERSフレームでサーバがクラッシュする問題の修正（CVE-2025-59465）。
また、`async_hooks`有効時にスタックオーバーフローエラーがキャッチできない問題、TLSクライアント証明書処理のメモリリークなども修正されている。
