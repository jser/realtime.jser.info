---
title: Bug-org 730760 laying out and rendering shouldn't halt by
author: azu
layout: post
itemUrl: 'http://www.d-toybox.com/studio/weblog/show.php?mode=single;id=2012022800'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2012/01/index.json'
date: '2012-01-31T22:49:00+00:00'
---
"別のサーバへの接続を開始すると、レイアウトやレンダリングが一時的に中断する、というバグ"の原因はbody付近でscriptタグで応答のないサーバのスクリプトを読み込もうとしようしているときに発生している。
これはブラウザ側で対処しにくいバグなので、サイト側が取るべき対処法についてまとめられている。
