---
title: 'Inside node: What happens when we execute a script?'
author: azu
layout: post
itemUrl: 'https://blog.s1h.org/inside-node-executing-a-script/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/01/index.json'
date: '2020-01-27T14:22:54Z'
tags:
  - ' node'
  - article
---
Node.jsでスクリプトを実行するまでにどのような処理が行われているのかをコードから見ていく記事。
`node`のコマンドライン引数の処理、ファイルのロード、`module`でのスクリプトをのコンパイル、libuvを使ったイベントループでのコード実行の流れについて
