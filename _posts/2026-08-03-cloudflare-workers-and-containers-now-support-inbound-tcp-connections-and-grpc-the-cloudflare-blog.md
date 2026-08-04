---
title: >-
  Cloudflare Workers and Containers now support inbound TCP connections and gRPC
  | The Cloudflare Blog
author: azu
layout: post
itemUrl: 'https://blog.cloudflare.com/grpc-workers/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/08/index.json'
date: '2026-08-03T23:59:37Z'
tags:
  - cloudflare
  - JavaScript
  - server
  - article
---
Cloudflare WorkersとContainersのInbound TCP/gRPC対応について。
Workers Runtimeに`connect(socket)`ハンドラを追加し、Spectrum経由のTCPソケットをWorkerで受け取れる。
Durable ObjectsからContainersのTCPポートへ転送し、Container上のgRPCサーバで双方向ストリーミングを扱える。
`@connectrpc/connect`とgRPC-web変換により、WorkerだけでUnary/Server StreamingのgRPC APIを扱える。
