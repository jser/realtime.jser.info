---
title: >-
  WorkerDOM: Concurrency for JavaScript programming with the DOM – Accelerated
  Mobile Pages Project
author: azu
layout: post
itemUrl: 'https://amphtml.wordpress.com/2018/08/21/workerdom/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/08/index.json'
date: '2018-08-26T04:40:42Z'
tags:
  - DOM
  - webworker
  - article
  - AMP
  - JavaScript
relatedLinks:
  - title: 'WorkerDOM: JavaScript Concurrency and the DOM - Speaker Deck'
    url: >-
      https://speakerdeck.com/cramforce/workerdom-javascript-concurrency-and-the-dom
  - title: >-
      ampproject/worker-dom: The same DOM API and Frameworks you know, but in a
      Web Worker.
    url: 'https://github.com/ampproject/worker-dom'
---
WebWorkerの中で動くDOMの実装のアルファ版を公開したという話。
メインスレッドでの処理が重なるとjankとなるため、WorkerスレッドでDOM APIの処理を行う実験的実装。
HydrateしたデータでWorkerとの間をやりとりし、変更はMutationObserverで監視する
