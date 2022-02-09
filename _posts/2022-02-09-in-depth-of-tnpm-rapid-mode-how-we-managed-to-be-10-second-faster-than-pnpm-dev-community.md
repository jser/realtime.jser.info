---
title: >-
  In-depth of tnpm rapid mode - how we managed to be 10 second faster than pnpm
  - DEV Community :woman:‍:computer::man:‍:computer:
author: azu
layout: post
itemUrl: >-
  https://dev.to/atian25/in-depth-of-tnpm-rapid-mode-how-could-we-fast-10s-than-pnpm-3bpp
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/02/index.json'
date: '2022-02-09T13:02:38Z'
tags:
  - npm
  - article
  - performance
---
npmレジストリのミラーレジストリであるcnpmベースにしたtnpmというnpmレジストリ/ツールについて。
高速なパッケージのインストールを実現するために、FUSEを利用した仕組みや一時的な変更に対応するためのOverlayFSを使った仕組みについて
