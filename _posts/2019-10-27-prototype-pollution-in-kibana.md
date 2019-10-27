---
title: Prototype Pollution in Kibana
author: azu
layout: post
itemUrl: 'https://slides.com/securitymb/prototype-pollution-in-kibana'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/10/index.json'
date: '2019-10-27T11:21:29Z'
tags:
  - JavaScript
  - security
  - slide
---
KibanaにあったPrototype pollutionの脆弱性を使ったRCEについての解説スライド。
`__proto__.env`で任意の環境変数を読み込ませてspawnするのを見つけ、`NODE_OPTIONS`と`/proc/self/environ`を使い環境変数にコードを仕込み実行させる手法の解説
