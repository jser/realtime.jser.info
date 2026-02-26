---
title: >-
  vercel-labs/portless: Replace port numbers with stable, named .localhost URLs.
  For humans and agents.
author: azu
layout: post
itemUrl: 'https://github.com/vercel-labs/portless'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/02/index.json'
date: '2026-02-26T14:42:28Z'
tags:
  - Tools
  - server
  - nodejs
  - debug
---
ポート番号の代わりに`myapp.localhost`のような名前付き`.localhost` URLを使えるようにする開発用プロキシツール。
`portless proxy start`でデーモンを起動し、`portless myapp next dev`のように開発サーバーを起動する。
`http://myapp.localhost:1355`のようなURLでアクセスできる。
HTTP/2やHTTPSの証明書の自動生成に対応し、Next.js/Express/Nuxt/Vite/Astroなどのフレームワークで利用できる。
