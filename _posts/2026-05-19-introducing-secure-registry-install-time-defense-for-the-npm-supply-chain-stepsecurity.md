---
title: >-
  Introducing Secure Registry: install-time defense for the npm supply chain -
  StepSecurity
author: azu
layout: post
itemUrl: >-
  https://www.stepsecurity.io/blog/introducing-secure-registry-install-time-defense-for-the-npm-supply-chain
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/05/index.json'
date: '2026-05-19T05:28:27Z'
tags:
  - npm
  - security
  - article
---
StepSecurityによるnpmサプライチェーン攻撃に対するインストール時の防御を行うProxy型のレジストリサービス。
レジストリへのパッケージ取得要求をプロキシで評価し、新規公開からの一定期間ブロックするクールダウン期間、危険なパッケージのブロック、タイポスクワッティング対策などの機能を提供する。
ローカルの開発環境、CI/CDパイプラインなどでの利用を想定している。
