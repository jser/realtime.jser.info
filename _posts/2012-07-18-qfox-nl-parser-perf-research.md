---
title: qfox.nl - Parser perf research
author: azu
layout: post
itemUrl: 'http://qfox.nl/weblog/258'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2012/07/index.json'
date: '2012-07-18T15:00:00+00:00'
---
パーサーなどで次のトークンのcharを取得してtypeを判定する処理について。
色々な取得方法と決定方法のパフォーマンス比較。

<pre>
str[index]
str.charAt(index)
str.charCodeAt(index)
str.substring(index,index+1)
str.substr(index, 1)
str.slice(index, index+1)
new RegExp('.{'+index+'}(.)').exec(str)[1]
str.match(new RegExp('.{'+index+'}(.)'))[1]
str.split('')[index]
str.split('').forEach(function(c){ ... })
Array.prototype.forEach.call(str, function(c){ ... })
str.replace(/./g, function(c){ ... })
</pre>
