---
title: Accelerate Next.js in Kubernetes
author: azu
layout: post
itemUrl: 'https://blog.platformatic.dev/93-faster-nextjs-in-your-kubernetes'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2025/12/index.json'
date: '2025-12-04T13:42:08Z'
tags:
  - Next.js
  - kubernetes
  - performance
  - linux
  - article
---
Node.jsアプリケーションをKubernetes環境でスケーリングする際の問題と、Wattを使った93%のレイテンシ改善について。
PM2やclusterモジュールはIPCによる約30%のオーバーヘッドがあり、単一CPUポッドの水平スケーリングでは負荷分散の不均衡が発生する。
WattはLinuxカーネルの`SO_REUSEPORT`を使い、マスタープロセスなしで各ワーカーが直接接続を受け付けることでオーバーヘッドを削減するアプローチを採用していることについて。
