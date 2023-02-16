---
title: Announcing Sandpack 2.0 and a Node.js runtime for any browser
author: azu
layout: post
itemUrl: 'https://codesandbox.io/blog/announcing-sandpack-2'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/02/index.json'
date: '2023-02-16T23:36:25Z'
tags:
  - JavaScript
  - node.js
  - browser
  - ReleaseNote
---
Sandpack 2.0リリース。
ブラウザ上でNode.jsのコードを実行するNodeboxの追加。
WebContainersとの違いとして、Nodeboxはサンプルコードの実行を意図しているので、完全なNode.jsのエミュレータではない点。一方で`SharedArrayBuffer`を使わないことで色々な環境でも動作するようになっている。
