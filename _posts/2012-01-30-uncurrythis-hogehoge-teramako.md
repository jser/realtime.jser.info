---
title: uncurryThis 関数 - hogehoge @teramako
author: azu
layout: post
itemUrl: 'http://d.hatena.ne.jp/teramako/20111231/p1'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2012/01/index.json'
date: '2012-01-30T22:30:00Z'
---
ES5のbindを使って、Object.prototype.hasOwnProperty.callやslice.applyなどを適応するときに、callなどを先にbindしてthisにするオブジェクトを指定しておいて、呼び出し時にcallなどを省略する使い方
