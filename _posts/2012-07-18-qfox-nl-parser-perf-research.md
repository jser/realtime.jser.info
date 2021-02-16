---
title: qfox.nl - Parser perf research
author: azu
layout: post
itemUrl: 'http://qfox.nl/weblog/258'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2012/07/index.json'
date: '2012-07-18T15:00:00Z'
---
パーサーなどで次のトークンのcharを取得してtypeを判定する処理について。
色々な取得方法と決定方法のパフォーマンス比較。

&lt;pre&gt;
str[index]
str.charAt(index)
str.charCodeAt(index)
str.substring(index,index+1)
str.substr(index, 1)
str.slice(index, index+1)
new RegExp(&#039;.{&#039;+index+&#039;}(.)&#039;).exec(str)[1]
str.match(new RegExp(&#039;.{&#039;+index+&#039;}(.)&#039;))[1]
str.split(&#039;&#039;)[index]
str.split(&#039;&#039;).forEach(function(c){ ... })
Array.prototype.forEach.call(str, function(c){ ... })
str.replace(/./g, function(c){ ... })
&lt;/pre&gt;
