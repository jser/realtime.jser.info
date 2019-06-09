---
title: 'mathjs v6: a monolith turned modular - Jos de Jong'
author: azu
layout: post
itemUrl: 'https://josdejong.com/blog/2019/06/08/mathjs-v6-a-monolith-turned-modular/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/06/index.json'
date: '2019-06-09T10:57:18Z'
tags:
  - JavaScript
  - library
  - ReleaseNote
relatedLinks:
  - title: mathjs/HISTORY.md at develop · josdejong/mathjs
    url: >-
      https://github.com/josdejong/mathjs/blob/develop/HISTORY.md#2019-06-08-version-600
---
matchjs v6リリース。
モノリシックからモジューラーなアプローチで利用できるように変更。
グローバルな設定ではなく`create`関数で依存と設定から特定の機能を作れるように、ES moduleでimportした際にtree-shakingができるように。
また`number`のみをサポートしたバージョンも同梱されている。
