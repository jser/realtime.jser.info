---
title: Deno 1.19 Release Notes
author: azu
layout: post
itemUrl: 'https://deno.com/blog/v1.19'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/02/index.json'
date: '2022-02-19T05:52:42Z'
tags:
  - deno
  - ReleaseNote
---
Deno 1.19リリース。
`Deno.File`を`Deno.FsFile`にリネームし、`Deno.File`をdeprecatedに変更。
依存関係をリポジトリ内のファイルとして管理する`deno vendor`コマンドの追加、`Deno.FsFile`や`Deno.Conn`などがWeb Streamsに対応。
`CompressionStream`/`DecompressionStream`のサポート、`console.log`が循環参照の表示に対応、`Deno.listen`がUnix socketsに対応など。
また、unstableなAPIとして、`Deno.getUid`、`Deno.networkInterfaces`の追加など。
