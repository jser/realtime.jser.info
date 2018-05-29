---
title: >-
  alangpierce/sucrase: Super-fast alternative to Babel for when you can target
  modern JS runtimes
author: azu
layout: post
itemUrl: 'https://github.com/alangpierce/sucrase'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/05/index.json'
date: '2018-05-29T23:44:51Z'
tags:
  - babel
  - jsx
  - flowtype
  - TypeScript
  - Tools
---
BabelのParserをforkして作られたJSX/Flow/TypeScriptなどをJSに変換するツール。
ES2015+が動く実行環境向けへコードを変換する際に、それ以外(JSX/Flow/TypeScript)の変換を高速に行うことが目的。
Babelとは異なりプラグインのステップを省くことで変換速度を向上させている。
