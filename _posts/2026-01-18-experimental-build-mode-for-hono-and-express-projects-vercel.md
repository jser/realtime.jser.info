---
title: Experimental build mode for Hono and Express projects - Vercel
author: azu
layout: post
itemUrl: 'https://vercel.com/changelog/experimental-build-mode-hono-express'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/01/index.json'
date: '2026-01-18T02:03:20Z'
tags:
  - vercel
  - Hono
  - express
  - TypeScript
  - news
---
VercelがHonoとExpressプロジェクト向けの実験的なビルドモードを追加。
`VERCEL_EXPERIMENTAL_BACKENDS=1`を環境変数に設定することで有効化でき、ログのルート別フィルターに対応。
また、相対インポート時のファイル拡張子が不要になり、TypeScriptのパスエイリアスに対応、ESMとCommonJSの相互運用性の向上などの改善が含まれる。
