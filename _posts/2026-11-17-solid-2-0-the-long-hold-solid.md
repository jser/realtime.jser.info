---
title: Solid 2.0 - The Long Hold | Solid
author: azu
layout: post
itemUrl: 'https://www.solidjs.com/blog/solid-2-0-the-long-hold/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/11/index.json'
date: '2026-11-17T23:09:30Z'
tags:
  - Solid
  - JavaScript
  - ReleaseNote
---
Solid 2.0リリース。
破壊的な変更として、`createResource`/`batch`/`startTransition`などのAPIを削除、SolidStartを廃止。
`createMemo`でPromiseや非同期イテレーターを扱えるようにし、`Loading`/`isPending`で読み込み状態を管理する。
サーバ関数をコアに統合し、`live`でServer-Sent Eventsによる継続的なデータ受信に対応。
ReactiveScript/TSRXを実験的にサポート。
