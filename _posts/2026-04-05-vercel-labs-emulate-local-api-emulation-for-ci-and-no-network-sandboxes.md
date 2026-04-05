---
title: 'vercel-labs/emulate: Local API emulation for CI and no-network sandboxes'
author: azu
layout: post
itemUrl: 'https://github.com/vercel-labs/emulate'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/04/index.json'
date: '2026-04-05T03:10:26Z'
tags:
  - vercel
  - API
  - testing
  - CI
  - Tools
  - nodejs
  - server
---
VercelやGitHub、Google、Slack、AWS(S3/SQS)などのAPIをローカルでエミュレートするツール。
CIやネットワークのないサンドボックス環境で、外部APIのモックサーバとして利用できる。
各サービスはステートフルにデータを保持し、OAuth 2.0フローやWebhookの配信にも対応している。
