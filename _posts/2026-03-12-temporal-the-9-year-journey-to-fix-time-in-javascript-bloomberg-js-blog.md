---
title: 'Temporal: The 9-Year Journey to Fix Time in JavaScript | Bloomberg JS Blog'
author: azu
layout: post
itemUrl: 'https://bloomberg.github.io/js-blog/post/temporal/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/03/index.json'
date: '2026-03-12T05:49:57Z'
tags:
  - TC39
  - ECMAScript
  - JavaScript
  - article
---
ECMAScript ProposalのTemporalがStage 4となりES2026に含まれることが決定するまでの経緯についての記事。
JavaScriptの`Date`オブジェクトが抱えるミュータブルな設計、タイムゾーン対応の不足、曖昧なパースなどの問題と、それを解決するためにTemporalがどのように設計されたかを解説している。
Temporalはイミュータブルな設計、タイムゾーンとカレンダーのネイティブサポート、ナノ秒精度などの特徴を持つ。
`ZonedDateTime`/`Instant`/`PlainDate`/`PlainTime`などの型。`temporal_rs`やBloomberg/Google/Microsoft/Igaliaなど複数の組織による協力についても紹介されている。
