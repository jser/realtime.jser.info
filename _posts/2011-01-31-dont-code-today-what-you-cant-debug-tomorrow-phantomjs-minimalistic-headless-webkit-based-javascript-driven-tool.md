---
title: "don't code today what you can't debug tomorrow: PhantomJS: minimalistic headless WebKit-based JavaScript-driven tool"
author: azu
layout: post
itemUrl: 'http://ariya.blogspot.com/2011/01/phantomjs-minimalistic-headless-webkit.html'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2011/01/index.json'
date: '2011-01-31T15:00:00+00:00'
---
JavaScriptファイルを実行できるWebkitベースのコマンドラインツール

PhantomJSの面白い所はDOMやCanvasなど他のコマンドラインツールで触れにくい部分もネイティブにアクセスできるため、リッチアプリケーションなどのテストツールとして活用できそうです。

<code>phantomjs somescript.js [argument [argument ...]]</code>

という感じでjsファイルを指定し、引数を渡して実行できるようで、phantom.argsで引数を受け取ったりできるようです。

そのほかにもsleepなどのAPIが用意されている。

-<a href="http://code.google.com/p/phantomjs/wiki/Interface" title="Interface - phantomjs - API Reference - Project Hosting on Google Code">Interface - phantomjs - API Reference - Project Hosting on Google Code</a>

<a href="http://code.google.com/p/phantomjs/wiki/SourceCode" title="SourceCode">SourceCode</a>はgitなどでも用意されていて、ソースからビルドする方法も解説されています。

(Windowsはバイナリが<a href="http://code.google.com/p/phantomjs/downloads/list" title="Downloads - phantomjs - Project Hosting on Google Code">ダウンロード</a>できる)

-<a href="http://code.google.com/p/phantomjs/wiki/BuildInstructions" title="BuildInstructions - phantomjs - Build Instructions - Project Hosting on Google Code">BuildInstructions - phantomjs - Build Instructions - Project Hosting on Google Code</a>

Jasmineとの連携が用意されていたり、かなり面白いJavaScript開発ツールとなっていそうです。
