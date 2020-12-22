---
title: Introducing Zero-Bundle-Size React Server Components – React Blog
author: azu
layout: post
itemUrl: >-
  https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/12/index.json'
date: '2020-12-22T05:03:30Z'
tags:
  - React
  - article
relatedLinks:
  - title: >-
      RFC: React Server Components by josephsavona · Pull Request #188 ·
      reactjs/rfcs
    url: 'https://github.com/reactjs/rfcs/pull/188'
  - title: Data Fetching with React Server Components - YouTube
    url: 'https://www.youtube.com/watch?v=TQQPAU21ZUw&feature=emb_title'
---
Reactで試験的に実装されたReact Server Componentsについて。
リクエストごとにサーバコンポーネントをレンダリングした結果をJSON(JSX + Slot表現)として返し、クライアントではレンダリング結果を使いレンダリングできる仕組み。
サーバサイドでコンポーネントをレンダリングすることで、レンダリング結果のみを扱うクライアントでは不要なライブラリを含めずに扱えるためサイズを減らせる。
コンポーネントレベルでのSSRとHydrateを行える仕組み。
