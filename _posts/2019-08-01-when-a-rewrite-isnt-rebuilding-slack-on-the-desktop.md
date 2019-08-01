---
title: 'When a rewrite isn’t: rebuilding Slack on the desktop'
author: azu
layout: post
itemUrl: 'https://slack.engineering/rebuilding-slack-on-the-desktop-308d6fe94ae4'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/08/index.json'
date: '2019-08-01T12:53:09Z'
tags:
  - slack
  - JavaScript
  - refacoring
  - article
---
Slack Desktopのアーキテクチャをどのようにリファクタリングしたかについて。
jQuery+SignalからReact+Reduxへの移行。
既存のコードベースを維持しつつ、徐々にモダンへ移行していく戦略について。
名前空間オブジェクトとモジュールの混在時における相互運用性。古いコードは新しいコードを直接importできず、新しいコードは古いコードを直接importできないという`legacy-interop`の概念の導入。
Multi workspaceを意識した書き換えによってメモリ使用量の削減の効果などがあったことについてなど
