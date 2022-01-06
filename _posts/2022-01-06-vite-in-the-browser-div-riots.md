---
title: Vite in the browser - ‹div›RIOTS
author: azu
layout: post
itemUrl: 'https://divriots.com/blog/vite-in-the-browser'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/01/index.json'
date: '2022-01-06T08:37:26Z'
tags:
  - vite
  - browser
  - article
relatedLinks:
  - title: 'divriots/browser-vite: Vite in the browser.'
    url: 'https://github.com/divriots/browser-vite'
---
ブラウザ上でViteを動かすbrowser-viteの仕組みについて。
HTTP serverをService Workerベースに変更、ファイルシステムの依存を削除しin-memoryで動かすように、Bundlerの仕組みをプラグインでサーバへ移動、クロスブラウザ対応。
HMRで使われていたWebSocketsをpostMessageベースに変更などを行い、ブラウザ上でViteを動かしているという話。
Node.jsをブラウザで動かすWebContainersとは異なり、Firefox/Chrome/Safariで動作するようになっている。
