---
title: Browser tabs as a container runtime | Farid Zakaria’s Blog
author: azu
layout: post
itemUrl: 'https://fzakaria.com/2026/11/25/browser-tabs-as-a-container-runtime'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/11/index.json'
date: '2026-11-28T09:57:29Z'
tags:
  - WebAssembly
  - Docker
  - Chromium
  - article
---
Chromiumのタブでコンテナを実行するOCIランタイムtabcについて。
WebAssemblyにコンパイルしたLinuxカーネルを使うunkernelを利用し、コンテナごとにタブを作成する。
