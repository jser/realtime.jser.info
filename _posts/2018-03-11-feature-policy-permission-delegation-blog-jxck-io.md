---
title: Feature Policy による Permission Delegation | blog.jxck.io
author: azu
layout: post
itemUrl: >-
  https://blog.jxck.io/entries/2018-03-08/feature-policy-permission-delegation.html
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2018/03/index.json'
date: '2018-03-11T14:32:53Z'
tags:
  - browser
  - security
  - article
---
iframe sandbox、CSP、Feature Policyの役割について。
`sandbox`はホワイリトストでの機能制限、CSPはブラックリストでの機能制限、Feature Policyは権限の設定をオリジンに対して行う。
また`sandbox`とFeature Policyの機能重複はしないことについて
