---
title: Nightly の XMLHttpRequest で text/html がパース可能に! - hogehoge @teramako
author: azu
layout: post
itemUrl: 'http://d.hatena.ne.jp/teramako/20111122/p1'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2011/11/index.json'
date: '2011-11-02T07:00:00Z'
---
FirefoxのNightlyにXHRのresponsebodyをHTMLパースする機能が加わった。
この実装を元に仕様にも反映していく。
http://www.w3.org/QA/2011/11/openweb-weekly-20.html
responseType=&quot;document&quot;
http://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html#document-response-entity-body
以前は以下のようにHTMLドキュメントを作ったりして利用していたのが省ける
http://nanto.asablo.jp/blog/2009/10/29/4660197
