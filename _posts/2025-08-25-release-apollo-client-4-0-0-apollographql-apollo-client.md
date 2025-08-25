---
title: Release @apollo/client@4.0.0 · apollographql/apollo-client
author: azu
layout: post
itemUrl: >-
  https://github.com/apollographql/apollo-client/releases/tag/%40apollo%2Fclient%404.0.0
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2025/08/index.json'
date: '2025-08-25T23:17:23Z'
tags:
  - JavaScript
  - library
  - ReleaseNote
  - GraphQL
relatedLinks:
  - title: Migrating to Apollo Client 4.0 - Apollo GraphQL Docs
    url: >-
      https://www.apollographql.com/docs/react/migrating/apollo-client-4-migration
---
Apollo Client 4.0リリース。
React依存を`@apollo/client/react`に分離しコアをフレームワーク非依存化、`ApolloClient`で`link`必須化/`uri`等のショートカット削除など。
エラーハンドリング刷新し`ApolloError`廃止しエラーごとに用意したクラスへ変更、Linkは関数からクラス化、RxJSを標準Observable実装に採用。
`dataState`プロパティでクエリ結果がわかるように、`@defer`のサポート、`localState`オプションの追加、React Compilerでコンパイル済みのHooksの公開。
TypeScriptの名前空間型整理/厳格化とツリーシェイク改善、SSR API刷新(`prerenderStatic`)。
`useLazyQuery`のAPIの変更、`useQuery`から`onCompleted`と`onError`を削除。
マイグレーションのためのCodemodも提供している。
