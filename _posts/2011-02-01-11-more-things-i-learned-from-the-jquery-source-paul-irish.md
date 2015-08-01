---
title: 11 More Things I Learned from the jQuery Source « Paul Irish
author: azu
layout: post
itemUrl: 'http://paulirish.com/2011/11-more-things-i-learned-from-the-jquery-source/'
date: '2011-01-31T15:00:00.000Z'
---
jQueryから学ぶ11の事

中で出てくるコードは<a href="https://gist.github.com/7871ac0364af27f27152" title="11 More Things I Learned from the jQuery Source">11 More Things I Learned from the jQuery Source</a>に

*適当な概要です(番号すら適当)

1.コード全体を無名関数で括り、返り値をjQuery変数に入れる

最後にwindow.jQuery = window.$ = jQueryとしてる。

(windowに依存させないならthisを使った方が良いかもしれない

-<a href="http://d.hatena.ne.jp/uupaa/20100524/1274684311" title="&#x30E9;&#x30A4;&#x30D6;&#x30E9;&#x30EA;&#x306E;&#x4E00;&#x90E8;&#x3067;&#x3042;&#x308A;&#x306A;&#x304C;&#x3089;&#x5358;&#x4F53;&#x5229;&#x7528;&#x3082;&#x53EF;&#x80FD;&#x306B;&#x3059;&#x308B;&#x5DE5;&#x592B; - latest log">ライブラリの一部でありながら単体利用も可能にする工夫 - latest log</a>)

2.即実行にパラメーターを持たせて、undefinedを取得する

-<a href="http://efcl.info/adiary/JavaScriptPatterns/Chapter4Functions#k91p5" title="Immediate Functions">Immediate Functions</a>

3.内部でbaseを持つ

4.data-*属性の使い方

内部的な動作、data-*に設定した値の判定方法

(data属性に設定した値は$("sel").data("属性")で取得できる。)

5.演算子の使い方

IEバージョン判定

<a href="https://gist.github.com/527683/ef2abeb8e764d465ea430f440ebe4c534c8e3281" title="gist: 527683 - GitHub">gist: 527683 - GitHub</a>



6.getElementsByTagNameとquerySelectorAllの違い

<pre>

 all = div.getElementsByTagName('i'); // live nodelist



 document.querySelectorAll('i') // static nodelist

</pre>

-<a href="http://d.hatena.ne.jp/vwxyz/20101005/1286276144" title="Nicholas C. Zakas&#x300C;getElementsByTagName()&#x304C;querySelectorAll()&#x3088;&#x308A;&#x3082;&#x9AD8;&#x901F;&#x306A;&#x4EF6;&#x300D; - &#x30AF;&#x30E9;&#x30A4;&#x30A2;&#x30F3;&#x30C8;&#x30FB;&#x30B5;&#x30A4;&#x30C9;&#x30FB;&#x30B9;&#x30AF;&#x30EA;&#x30D7;&#x30C6;&#x30A3;&#x30F3;&#x30B0; with Web Standards">Nicholas C. Zakas「getElementsByTagName()がquerySelectorAll()よりも高速な件」 - クライアント・サイド・スクリプティング with Web Standards</a>

7.jQuery.cssHooks.opacityについて

IEではfilterを使ってるので取得などがカオス

<a href="https://github.com/brandonaaron/jquery-cssHooks" title="brandonaaron/jquery-cssHooks - GitHub">brandonaaron/jquery-cssHooks - GitHub</a>

$(elem).cssについて

$(elem).css('box-shadow','10px 10px 30px #bada55')

プレフィックスがいらない

11.jQuery.fnについて

<pre>

jQuery.fn === jQuery.prototype;// true

</pre>



以前に<a href="http://paulirish.com/2010/10-things-i-learned-from-the-jquery-source/" title="10 Things I Learned from the jQuery Source &#xAB; Paul Irish">10 Things I Learned from the jQuery Source « Paul Irish</a>というものをやっていて、それの続編というか改良版みたいな感じのようです。

後半になるほどjQuery独自の要素が増えている感じです。
