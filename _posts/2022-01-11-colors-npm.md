---
title: colorsなどのnpmパッケージに悪意あるコードが含まれている問題について
author: azu
layout: post
itemUrl: 'https://zenn.dev/azu/articles/d56615b2e11ad1'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/01/index.json'
date: '2022-01-11T03:00:15Z'
tags:
  - npm
  - security
  - article
---
colors.jsにDoS攻撃のコードを入れたものがpublishされていた問題について。
npmパッケージの直接的/間接的依存のチェック方法やYarnの`resolutions`、npm 8.3+の`overrides`でのバージョン固定方法について。
