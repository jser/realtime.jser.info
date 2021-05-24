---
title: 'Introducing WebContainers: Run Node.js natively in your browser'
author: azu
layout: post
itemUrl: 'https://blog.stackblitz.com/posts/introducing-webcontainers/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/05/index.json'
date: '2021-05-24T15:02:08Z'
tags:
  - node.js
  - browser
  - webworker
  - WebAssembly
  - article
relatedLinks:
  - title: stackblitz/webcontainer-core
    url: 'https://github.com/stackblitz/webcontainer-core'
  - title: AngularAir - StackBlitz with Eric Simons and Dominic Elm - YouTube
    url: 'https://www.youtube.com/watch?v=5F9qH-ea5Qk'
---
Node.jsをブラウザで動かすWebContainersについて。
Node.jsのランタイムをブラウザで動かし、ブラウザ自体をSandboxとしてNode.jsのコードをセキュアに実行するための仕組み。
Virtual FSとNetworkingを実装し、各プロセスをWorkerとして起動してメッセージングすることでマルチプロセスのサポートしている。
POSIXなシェルとしてjshという実装と、npm/yarnクライアントとしてturboという実装を持っている
