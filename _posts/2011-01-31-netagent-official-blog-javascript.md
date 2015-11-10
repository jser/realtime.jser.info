---
title: 'NetAgent Official Blog : 難読化JavaScriptで利用可能なテクニック'
author: azu
layout: post
itemUrl: 'http://www.netagent-blog.jp/archives/51739962.html'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2011/01/index.json'
date: '2011-01-31T15:00:00+00:00'
---
記号プログラミングと難読化エンコーダーの合わせ技でよい難読化を行う手法についての解説。
eval 関数を使うところを、Firefox 独自実装の crypto.generateCRMFRequest メソッドを利用。
evalについては[Perfection kills » Global eval. What are the options?](http://perfectionkills.com/global-eval-what-are-the-options/ "Perfection kills » Global eval. What are the options?")がとても詳しい
