---
title: Aligned Input Events  |  Web  |  Google Developers
author: azu
layout: post
itemUrl: 'https://developers.google.com/web/updates/2017/06/aligning-input-events'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/06/index.json'
date: '2017-06-25T13:35:38Z'
tags:
  - JavaScript
  - event
  - article
  - Android
---
Pointer Eventsの`getCoalescedEvents`について。
入力デバイスは60-120Hzに対して、モニタが60Hzである場合にポインタのイベントをすべて処理するのは無駄となる。
その無駄を回避するためにイベントをまとめてくれる`getCoalescedEvents()`について
