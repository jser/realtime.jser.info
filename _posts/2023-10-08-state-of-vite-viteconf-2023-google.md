---
title: State of Vite (ViteConf 2023) - Google スライド
author: azu
layout: post
itemUrl: >-
  https://docs.google.com/presentation/d/1oZnjsPBnb3OB2HxU88vYkZLa54GV-xNKrF8XkOIqLAU/mobilepresent#slide=id.p
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/10/index.json'
date: '2023-10-08T04:41:03Z'
tags:
  - vite
  - slide
  - Rust
  - rollup
  - bundler
relatedLinks:
  - title: >-
      Design Trade-offs in Bundler: The Rationale Behind Creating Rspack ·
      web-infra-dev/wg · Discussion #1
    url: 'https://github.com/web-infra-dev/wg/discussions/1'
  - title: rolldown-rs
    url: 'https://github.com/rolldown-rs/'
  - title: Why Vite | Vite
    url: 'https://vitejs.dev/guide/why.html'
---
Viteの現在と今後について。
Devビルドにesbuild、ProdビルドにRollupを使うためビルド結果に差異が出やすいなどの問題がある。
そのため、Rollup互換を意識したRolldownというBundlerをRustで開発するという話。
Rspackチームと協力して進める予定で、
Rspackはwebpack互換であり、RolldownはRollup互換を目的にしている。
