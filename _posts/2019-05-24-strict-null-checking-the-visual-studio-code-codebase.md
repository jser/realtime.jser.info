---
title: Strict null checking the Visual Studio Code codebase
author: azu
layout: post
itemUrl: 'https://code.visualstudio.com/blogs/2019/05/23/strict-null'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/05/index.json'
date: '2019-05-24T15:50:36Z'
tags:
  - VSCode
  - TypeScript
  - article
---
VSCodeのコードベースでTypeScriptのstrict null checkを有効化した話。
`strictNullCheck`が`false`のときによく起きていた問題と1800ファイルあるコードをどのように修正していったかについて。
`strictNullCheck`を有効化した`tsconfig.json`を作り、`files`に追加しながら修正していった
