---
title: React v16.0 - React Blog
author: azu
layout: post
itemUrl: 'https://facebook.github.io/react/blog/2017/09/26/react-v16.0.html'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/09/index.json'
date: '2017-09-27T03:11:39Z'
tags:
  - React
  - ReleaseNote
relatedLinks:
  - title: What’s New With Server-Side Rendering in React 16 – Sasha Aickin – Medium
    url: >-
      https://medium.com/@aickin/whats-new-with-server-side-rendering-in-react-16-9b0d78585d67
  - title: React v15.6.2 - React Blog
    url: 'https://facebook.github.io/react/blog/2017/09/25/react-v15.6.2.html'
  - title: >-
      React 16: A look inside an API-compatible rewrite of our frontend UI
      library | Engineering Blog | Facebook Code
    url: >-
      https://code.facebook.com/posts/1716776591680069/react-16-a-look-inside-an-api-compatible-rewrite-of-our-frontend-ui-library/
---
React 16.0リリース。
15.6.2と共にMITライセンスへ変更された。
APIの基本的な互換は持ちつつコアを書き変え(Fiber)、
`render`がフラグメントや文字列を返せるように、コンポーネントのエラーハンドリングの改善、`ReactDOM.createPortal`の追加、SSRの改善など。
`Map`/`Set`/`requestAnimationFrame`に依存する。
