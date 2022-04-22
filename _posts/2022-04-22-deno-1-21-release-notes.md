---
title: Deno 1.21 Release Notes
author: azu
layout: post
itemUrl: 'https://deno.com/blog/v1.21'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/04/index.json'
date: '2022-04-22T21:17:43Z'
tags:
  - deno
  - ReleaseNote
relatedLinks:
  - title: 'Implement new two-tier subprocess API · Issue #11016 · denoland/deno'
    url: 'https://github.com/denoland/deno/issues/11016'
---
Deno 1.21リリース。
明示的に型チェックをする`deno check`コマンドを追加し、次のリリースで`deno run`の型チェックはデフォルトでは無効にする予定。
`globalThis.reportError`と`error`イベントをサポート、`deno repl`に`--eval-file`フラグを追加。
`deno fmt`と`deno lint`がデフォルトでキャッシュされるように。
UnstableなAPIとして、`Deno.spawn`/`Deno.spawnChild`/`Deno.spawnSync`の追加。
`deno test`のBDDライクな`describe`や`it`などのメソッドを追加、STDに`spy`/`stub`/`assertSnapshot`/`FakeTime`を追加など
