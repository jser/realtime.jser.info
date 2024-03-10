---
title: '&quot;react-strict-dom&quot;, why it&#039;s so great? | Szymon Rybczak'
author: azu
layout: post
itemUrl: 'https://szymonrybczak.dev/blog/react-strict-dom'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/03/index.json'
date: '2024-03-10T02:37:00Z'
tags:
  - React
  - HTML
  - iOS
  - Android
  - article
relatedLinks:
  - title: >-
      RFC: React DOM for Native (reduce API fragmentation) by necolas · Pull
      Request #496 · react-native-community/discussions-and-proposals
    url: >-
      https://github.com/react-native-community/discussions-and-proposals/pull/496
---
react-strict-domについて。
React Native for WebのアプローチではReact Nativeのプリミティブをウェブ向けに変換する互換Shimが大きかった。
react-strict-domでは逆のアプローチを採用し、DOM APIのサブセットをネイティブ側で扱う。
