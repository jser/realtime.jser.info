---
title: 'Introducing workerd: the Open Source Workers runtime'
author: azu
layout: post
itemUrl: 'https://blog.cloudflare.com/workerd-open-source-workers-runtime/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/09/index.json'
date: '2022-09-28T23:31:05Z'
tags:
  - cloudflare
  - ReleaseNote
  - C++
relatedLinks:
  - title: Release v3.0.0-next.1 · cloudflare/miniflare
    url: 'https://github.com/cloudflare/miniflare/releases/tag/v3.0.0-next.1'
  - title: cloudflare/workerd
    url: 'https://github.com/cloudflare/workerd'
---
Cloudflare WorkersのJavaScript/WebAssembly runtimeであるworkerdが公開された。
MiniflareでJSを使って実装していた部分もworkerdを使うものが公開されている。
workerd自体はSandboxではないが、SSRF防止するためのBindingとFetchの仕組みなども持っている。
