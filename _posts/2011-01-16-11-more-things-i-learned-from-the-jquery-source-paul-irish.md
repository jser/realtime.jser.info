---
title: 11 More Things I Learned from the jQuery Source « Paul Irish
author: azu
layout: post
itemUrl: 'http://paulirish.com/2011/11-more-things-i-learned-from-the-jquery-source/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2011/01/index.json'
date: '2011-01-16T02:44:00+00:00'
---
jQueryから学ぶ11の事
中で出てくるコードは[11 More Things I Learned from the jQuery Source](https://gist.github.com/7871ac0364af27f27152 "11 More Things I Learned from the jQuery Source")に
*適当な概要です(番号すら適当)
1.コード全体を無名関数で括り、返り値をjQuery変数に入れる
最後にwindow.jQuery = window.$ = jQueryとしてる。
(windowに依存させないならthisを使った方が良いかもしれない
-[ライブラリの一部でありながら単体利用も可能にする工夫 - latest log](http://d.hatena.ne.jp/uupaa/20100524/1274684311 "ライブラリの一部でありながら単体利用も可能にする工夫 - latest log"))
2.即実行にパラメーターを持たせて、undefinedを取得する
-[Immediate Functions](http://efcl.info/adiary/JavaScriptPatterns/Chapter4Functions#k91p5 "Immediate Functions")
3.内部でbaseを持つ
4.data-*属性の使い方
内部的な動作、data-*に設定した値の判定方法
(data属性に設定した値は$("sel").data("属性")で取得できる。)
5.演算子の使い方
IEバージョン判定
[gist: 527683 - GitHub](https://gist.github.com/527683/ef2abeb8e764d465ea430f440ebe4c534c8e3281 "gist: 527683 - GitHub")

6.getElementsByTagNameとquerySelectorAllの違い

<pre>
 all = div.getElementsByTagName('i'); // live nodelist

 document.querySelectorAll('i') // static nodelist
</pre>

-[Nicholas C. Zakas「getElementsByTagName()がquerySelectorAll()よりも高速な件」 - クライアント・サイド・スクリプティング with Web Standards](http://d.hatena.ne.jp/vwxyz/20101005/1286276144 "Nicholas C. Zakas「getElementsByTagName()がquerySelectorAll()よりも高速な件」 - クライアント・サイド・スクリプティング with Web Standards")
7.jQuery.cssHooks.opacityについて
IEではfilterを使ってるので取得などがカオス
[brandonaaron/jquery-cssHooks - GitHub](https://github.com/brandonaaron/jquery-cssHooks "brandonaaron/jquery-cssHooks - GitHub")
$(elem).cssについて
$(elem).css('box-shadow','10px 10px 30px #bada55')
プレフィックスがいらない
11.jQuery.fnについて

<pre>
jQuery.fn === jQuery.prototype;// true
</pre>

以前に[10 Things I Learned from the jQuery Source « Paul Irish](http://paulirish.com/2010/10-things-i-learned-from-the-jquery-source/ "10 Things I Learned from the jQuery Source « Paul Irish")というものをやっていて、それの続編というか改良版みたいな感じのようです。
後半になるほどjQuery独自の要素が増えている感じです。
