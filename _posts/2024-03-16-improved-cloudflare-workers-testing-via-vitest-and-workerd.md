---
title: Improved Cloudflare Workers testing via Vitest and workerd
author: azu
layout: post
itemUrl: 'https://blog.cloudflare.com/workers-vitest-integration/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/03/index.json'
date: '2024-03-16T08:33:21Z'
tags:
  - cloudflare
  - vite
  - test
  - article
relatedLinks:
  - title: Vitest integration · Cloudflare Workers docs
    url: 'https://developers.cloudflare.com/workers/testing/vitest-integration/'
---
VitestでCloudflare Workersのテストを行う方法について。
`@cloudflare/vitest-pool-workers`を使うことで、Workerに対するUnit Testができる仕組みについて。
VitestのCustom Poolを使うことで、テストをworkerdのプロセス内で実行している。
