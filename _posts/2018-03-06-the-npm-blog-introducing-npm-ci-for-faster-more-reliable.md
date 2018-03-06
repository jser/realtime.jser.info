---
title: 'The npm Blog — Introducing `npm ci` for faster, more reliable...'
author: azu
layout: post
itemUrl: >-
  http://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/03/index.json'
date: '2018-03-06T00:59:53Z'
tags:
  - npm
  - article
relatedLinks:
  - title: zkat/node-package-manager-benchmark at zkat/cipm
    url: 'https://github.com/zkat/node-package-manager-benchmark/tree/zkat/cipm'
---
`pacakge-lock.json`から常にクリーンインストールする`npm ci`について。
現在の存在する`node_modules`ディレクトリを削除し、`pacakge-lock.json`を元にインストールするCI環境向けのインストールコマンド。
