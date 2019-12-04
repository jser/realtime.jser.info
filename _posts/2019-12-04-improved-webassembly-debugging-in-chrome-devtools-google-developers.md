---
title: Improved WebAssembly debugging in Chrome DevTools  |  Google Developers
author: azu
layout: post
itemUrl: 'https://developers.google.com/web/updates/2019/12/webassembly'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/12/index.json'
date: '2019-12-04T14:04:18Z'
tags:
  - Chrome
  - WebAssembly
  - article
relatedLinks:
  - title: Dwarf Home
    url: 'http://dwarfstd.org/'
---
Chrome 80でDWARFのサポートが入った。
WebAssemblyのデバッグ時に元のソースコードとの対応したブレークポイントの設定やステップ実行が可能になる。
DWARFはバイナリ向けのSource Mapのような仕様で、バイナリに対してデバッグ用の情報を埋め込むためのデータフォーマット
