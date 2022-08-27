---
title: Why your website should be under 14kB in size | endtimes.dev
author: azu
layout: post
itemUrl: 'https://endtimes.dev/why-your-website-should-be-under-14kb-in-size/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/08/index.json'
date: '2022-08-27T16:23:25Z'
tags:
  - HTTP
  - performance
  - article
---
TCP slow startにより14600 bytes(約14kb)でラウンドトリップが発生するため、14kbより大きい場合にラウンドトリップ分の遅延が起きるという話。
HTTP/3 QUICでもほぼ同じサイズでの輻輳制御が推奨されている。
