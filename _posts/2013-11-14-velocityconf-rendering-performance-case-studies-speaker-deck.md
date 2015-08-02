---
title: 'VelocityConf: Rendering Performance Case Studies // Speaker Deck'
author: azu
layout: post
itemUrl: 'https://speakerdeck.com/addyosmani/velocityconf-rendering-performance-case-studies'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2013/11/index.json'
date: '2013-11-14T01:02:16+00:00'
tags:
  - performance
  - browser
  - スライド
---
60fpsでのスクロールを実現するために、どのような問題(jank)があるのかをみて、reflowや画像のデコード等重たい箇所をChrome Dev Toolsで見つけて解決していく話。
ケーススタディとしてパララックスなサイトで、スクロールする度に描画必要な要素を
http://www.html5rocks.com/en/tutorials/speed/high-performance-animations/ で書かれているように、CSS translate3d等を使ってGPUレイヤーを分ける事で高速化する話。
またGoogle+の例にtranslate3dをやり過ぎると逆に合成に時間がかかりすぎる問題を生む話などレンダリングのパフォーマンスについて書かれているスライド
