---
title: Nullstack - Full-stack Javascript Components
author: azu
layout: post
itemUrl: 'https://nullstack.app/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/01/index.json'
date: '2021-01-04T12:45:05Z'
tags:
  - JavaScript
  - node.js
  - browser
  - library
---
同じコンポーネントでブラウザとNode.jsで動くコードを扱うフルスタックフレームワーク。
`.njs`という拡張子でライフサイクルメソッドとJSXを使ったコンポーネントを書くことで、SSRやHydrateなどを行う。
サーバで動くコードは`static async`で書き、インスタントメソッドはブラウザ向けの処理となり、`context`オブジェクトで値をやり取りする。
ビルドするとブラウザとサーバのコードをそれぞれbundleしたファイルを出力する。
