---
title: Nightly の XMLHttpRequest で text/html がパース可能に！ - hogehoge @teramako
author: azu
layout: post
itemUrl: 'http://d.hatena.ne.jp/teramako/20111122/p1'
date: '2011-11-30T15:00:00.000Z'
---
FirefoxのNightlyにXHRのresponsebodyをHTMLパースする機能が加わった。

この実装を元に仕様にも反映していく。

http://www.w3.org/QA/2011/11/openweb-weekly-20.html

responseType="document"

http://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html#document-response-entity-body

以前は以下のようにHTMLドキュメントを作ったりして利用していたのが省ける

http://nanto.asablo.jp/blog/2009/10/29/4660197
