---
title: emscripten/ChangeLog.md at master · emscripten-core/emscripten
author: azu
layout: post
itemUrl: >-
  https://github.com/emscripten-core/emscripten/blob/master/ChangeLog.md#200-08102020
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/08/index.json'
date: '2020-08-18T00:47:28Z'
tags:
  - WebAssembly
  - JavaScript
  - library
  - Tools
  - ReleaseNote
relatedLinks:
  - title: 'Remove fastcomp · Issue #11319 · emscripten-core/emscripten'
    url: 'https://github.com/sbc100'
---
C/C++などをWebAssemblyにコンパイルするEmscripten 2.0リリース。
fastcomp backendの削除、Python 2のサポートを削除。
また例外情報のメタデータをJSではなく`WebAssembly.Memory`に保存することで例外処理がスレッドセーフになるような変更など
