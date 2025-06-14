---
title: 'We shipped FinalizationRegistry in Workers: why you should never use it'
author: azu
layout: post
itemUrl: >-
  https://blog.cloudflare.com/we-shipped-finalizationregistry-in-workers-why-you-should-never-use-it/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2025/06/index.json'
date: '2025-06-14T14:09:59Z'
tags:
  - cloudflare
  - JavaScript
  - article
---
Cloudflare Workersの`FinalizationRegistry` APIのサポートについて。
WebAssemblyと連携する際のメモリ管理で、JavaScriptオブジェクトがガベージコレクションされる際にコールバックを実行するAPI。  
非決定的な実行タイミングのため使用を推奨せず、代わりにExplicit Resource Managementの使用を推奨。I/O操作を無効化するなどの安全対策を実装して提供している
