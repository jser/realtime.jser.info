---
title: Rust + Node-APIでクロスプラットフォーム向けnpmパッケージを公開する - 別にしんどくないブログ
author: azu
layout: post
itemUrl: 'https://shisama.hatenablog.com/entry/2021/12/03/054437'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/12/index.json'
date: '2021-12-04T14:04:52Z'
tags:
  - Rust
  - node.js
  - article
---
napi-rsを使ったRustで書いたコードをNode.jsのnative modulesとして利用する方法について。
アーキテクチャごとのバイナリをpublishしoptionalDependenciesとして定義することで、`postinstall`を不要にする方法について。
