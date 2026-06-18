---
title: 'nubjs/nub: The all-in-one Node.js toolkit'
author: azu
layout: post
itemUrl: 'https://github.com/nubjs/nub'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/06/index.json'
date: '2026-06-18T13:03:05Z'
tags:
  - nodejs
  - Rust
  - Tools
relatedLinks:
  - title: Nub — an all-in-one toolkit for Node.js
    url: 'https://nubjs.com/'
---
Node.js向けのRust製ツールキット。
TypeScriptファイルや`package.json`のスクリプト実行、`nub install`で依存関係のインストールやパッケージ管理、`nub node`でNode.jsのバージョン管理ができる。
RuntimeとしてPolyfillなどを含めたNode.jsを利用し、内部的にはRustで書かれたパッケージマネージャであるaubeとOXCを利用している。
