---
title: React 19 Beta – React
author: azu
layout: post
itemUrl: 'https://react.dev/blog/2024/04/25/react-19'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/04/index.json'
date: '2024-04-26T01:08:41Z'
tags:
  - React
  - ReleaseNote
---
React 19 Betaリリース。
Actionという概念の導入と`useActionState`/`useFormStatus`の追加。
楽観的な更新を扱う`useOptimistic`、Promiseをunwrapする`use`の追加。
Server Component/Server Actionのサポート、`fowardRef`が不要となるように変更。
Hydrationのエラーの表示の改善、`&lt;Context&gt;`自体が`&lt;Context.Provider&gt;`としての機能を持つように変更、`ref`のcleanup処理を定義できるように。
`useDeferredValue`の第二引数に初期値をサポート、`&lt;title&gt;`などのメタデータタグのサポート、`&lt;link ref=stylesheet&gt;`でのスタイルシートのサポート。
`&lt;script async={true}&gt;`のサポート、`preload`などの`&lt;link rel=preload&gt;`を扱う関数を追加。
React 18ではサードパーティによってHTMLが改変されたときはHydration時にレンダリングし直すことで消えていたが、残るように変更、Custme Elementのサポートなど。
