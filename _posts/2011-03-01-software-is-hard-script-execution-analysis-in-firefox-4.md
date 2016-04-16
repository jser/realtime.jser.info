---
title: Software is hard | Script Execution Analysis in Firefox 4
author: azu
layout: post
itemUrl: >-
  http://www.softwareishard.com/blog/firebug/script-execution-analysis-in-firefox-4/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2011/03/index.json'
date: '2011-03-01T04:17:00+00:00'
---
Fireox3.6と4.0ではインラインスクリプトやScriptタグをつくって入れた外部スクリプトの挙動が少し変わってる。
DOMContentLoadができるだけ早く起きるように工夫されて、無駄な実行待ちなどが減っている。addExternalScriptの実行順は取得順になっている
