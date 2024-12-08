---
title: React v19 – React
author: azu
layout: post
itemUrl: 'https://react.dev/blog/2024/12/05/react-19'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/12/index.json'
date: '2024-12-08T13:01:17Z'
tags:
  - React
  - ReleaseNote
relatedLinks:
  - title: 'Release 19.0.0 (December 5, 2024) · facebook/react'
    url: 'https://github.com/facebook/react/releases/tag/v19.0.0'
  - title: Release v15.0.4 · vercel/next.js
    url: 'https://github.com/vercel/next.js/releases/tag/v15.0.4'
---
React 19リリース。
非同期遷移を扱うアクションの概念の追加と`useActionState`/`useFormStatus`/`useOptimistic`/`use` APIの追加。
react-domにprerender APIの追加、Server ComponentとServer Actionの追加。
`ref`をpropsとして渡す際に`forwardRef`は不要に、Hydration Errorの改善、`ref` callbackがcleanup関数を返せるように。
`&lt;title&gt;`/`&lt;meta&gt;`/`&lt;link&gt;`などのメタタグをサポート、`&lt;link rel=stylesheet&gt;`や`&lt;script async={true} src=...&gt;`をサポート。
リソースのpreload APIのサポート、Custom Elementをサポートなど
