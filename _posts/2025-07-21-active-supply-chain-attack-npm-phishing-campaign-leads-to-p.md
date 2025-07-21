---
title: 'Active Supply Chain Attack: npm Phishing Campaign Leads to P...'
author: azu
layout: post
itemUrl: >-
  https://socket.dev/blog/npm-phishing-campaign-leads-to-prettier-tooling-packages-compromise
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2025/07/index.json'
date: '2025-07-21T08:15:14Z'
tags:
  - npm
  - security
  - news
relatedLinks:
  - title: >-
      Jordan Harband on X: &amp;quot;Heads up that v3.3.1 of
      https://t.co/jTB21NZuoO has malware in it, due to another maintainer’s
      account being hijacked. They’re removed for now, v3.3.0 is set at latest,
      v3.3.1 is deprecated, and a v3.3.2 will be published once I’m not on my
      phone (thx @github codespaces)&amp;quot; / X
    url: 'https://x.com/ljharb/status/1946636509601538233'
---
npmパッケージを狙ったフィッシングキャンペーンが増加しているという話。
次のnpmパッケージにマルウェアが含まれるため、該当するバージョンを利用している場合は対応が必要となる。

- eslint-config-prettier: 8.10.1, 9.1.1, 10.1.6, 10.1.7
- eslint-plugin-prettier: 4.2.2, 4.2.3
- synckit: 0.11.9
- @pkgr/core: 0.2.8
- napi-postinstall: 0.3.1
- is: 3.3.1

