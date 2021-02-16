---
title: >-
  don&#039;t code today what you can&#039;t debug tomorrow: PhantomJS:
  minimalistic headless WebKit-based JavaScript-driven tool
author: azu
layout: post
itemUrl: 'http://ariya.blogspot.com/2011/01/phantomjs-minimalistic-headless-webkit.html'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2011/01/index.json'
date: '2011-01-10T19:48:00Z'
---
JavaScriptファイルを実行できるWebkitベースのコマンドラインツール
PhantomJSの面白い所はDOMやCanvasなど他のコマンドラインツールで触れにくい部分もネイティブにアクセスできるため、リッチアプリケーションなどのテストツールとして活用できそうです。
`phantomjs somescript.js [argument [argument ...]]`
という感じでjsファイルを指定し、引数を渡して実行できるようで、phantom.argsで引数を受け取ったりできるようです。
そのほかにもsleepなどのAPIが用意されている。
-[Interface - phantomjs - API Reference - Project Hosting on Google Code](http://code.google.com/p/phantomjs/wiki/Interface &quot;Interface - phantomjs - API Reference - Project Hosting on Google Code&quot;)
[SourceCode](http://code.google.com/p/phantomjs/wiki/SourceCode &quot;SourceCode&quot;)はgitなどでも用意されていて、ソースからビルドする方法も解説されています。
(Windowsはバイナリが[ダウンロード](http://code.google.com/p/phantomjs/downloads/list &quot;Downloads - phantomjs - Project Hosting on Google Code&quot;)できる)
-[BuildInstructions - phantomjs - Build Instructions - Project Hosting on Google Code](http://code.google.com/p/phantomjs/wiki/BuildInstructions &quot;BuildInstructions - phantomjs - Build Instructions - Project Hosting on Google Code&quot;)
Jasmineとの連携が用意されていたり、かなり面白いJavaScript開発ツールとなっていそうです。
