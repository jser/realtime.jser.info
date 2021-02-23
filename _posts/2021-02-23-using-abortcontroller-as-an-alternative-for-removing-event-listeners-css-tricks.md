---
title: >-
  Using AbortController as an Alternative for Removing Event Listeners |
  CSS-Tricks
author: azu
layout: post
itemUrl: >-
  https://css-tricks.com/using-abortcontroller-as-an-alternative-for-removing-event-listeners/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/02/index.json'
date: '2021-02-23T04:50:56Z'
tags:
  - DOM
  - JavaScript
  - article
---
Chrome 88から`addEventListener`がAbort Signalに対応したため、`removeEventListener`を使わずにイベントリスナーを解除できるという話
