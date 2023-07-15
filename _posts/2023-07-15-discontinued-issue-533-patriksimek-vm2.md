---
title: 'Discontinued · Issue #533 · patriksimek/vm2'
author: azu
layout: post
itemUrl: 'https://github.com/patriksimek/vm2/issues/533'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/07/index.json'
date: '2023-07-15T04:07:31Z'
tags:
  - node.js
  - security
  - library
  - issue
  - news
relatedLinks:
  - title: >-
      vm2 Sandbox Escape vulnerability · CVE-2023-37466 · GitHub Advisory
      Database
    url: 'https://github.com/advisories/GHSA-cchq-frgv-rjh5'
  - title: 'laverdet/isolated-vm: Secure &amp; isolated JS environments for nodejs'
    url: 'https://github.com/laverdet/isolated-vm'
---
Node.jsの`vm`モジュールを使ったSandboxを実現する目的の`vm2`に構造的なSandbox Escapeの脆弱性があるため、メンテナンスを終了するというアナウンス。
脆弱性のPoCは2023年8月ごろに公開されるため、isolated-vmのようなモジュールへ移行を推奨している。
