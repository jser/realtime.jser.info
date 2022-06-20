---
title: 'Notes on maintaining an internal React component library | Gabe&#039;s blog'
author: azu
layout: post
itemUrl: 'https://www.gabe.pizza/notes-on-component-libraries/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/06/index.json'
date: '2022-06-20T13:24:51Z'
tags:
  - React
  - article
---
社内でReactコンポーネントライブラリを作るときのプラクティスについての記事。
間違った状態を受け入れる型を避ける、子となるコンポーネント自体にmarginを持たせない、コンポーネントのwidthは幅全体を占めるようにする。
コンポーネントのPropsとして`className`や`style`は公開しないようにする、ElementのPropsを継承しないようにする。
相互依存するコンポーネントにはReact Contextを使う、一緒に利用するコンポーネントはオブジェクトとしてまとめてexportする。
メジャーアップデートと共にcodemodを提供する、開発者がどのように使ってるかを分析、ビジュアルリグレッションテストを設定するなど
