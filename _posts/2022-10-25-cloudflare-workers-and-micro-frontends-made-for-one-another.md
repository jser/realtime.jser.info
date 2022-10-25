---
title: 'Cloudflare Workers and micro-frontends: made for one another'
author: azu
layout: post
itemUrl: 'https://blog.cloudflare.com/better-micro-frontends/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/10/index.json'
date: '2022-10-25T14:07:07Z'
tags:
  - MicroFrontend
  - article
relatedLinks:
  - title: Cloudflare Workersとマイクロフロントエンド
    url: 'https://zenn.dev/laiso/articles/972b9d82030542'
---
Cloudflare WorkersとQwikを使ったMicroFrontendのサンプル実装。
各フラグメントを返すWorkerがあり、メインのWorkerからフラグメントのWorkerにリクエストする形で取得したものを結合してSSRする。
各フラグメントとなるWorkerは独立してデプロイできるようになっている。
