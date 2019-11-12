---
title: >-
  GoogleChrome/lighthouse-ci: Automate running Lighthouse for every commit,
  viewing the changes, and preventing regressions
author: azu
layout: post
itemUrl: 'https://github.com/GoogleChrome/lighthouse-ci'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2019/11/index.json'
date: '2019-11-12T02:02:13Z'
tags:
  - browser
  - performance
  - 'CI '
  - testing
relatedLinks:
  - title: 'treosh/lighthouse-ci-action: Run Lighthouse in CI using Github Actions'
    url: 'https://github.com/treosh/lighthouse-ci-action'
---
継続的にlighthouseの結果を計測し、設定したbudgetに対するassertionを行うためのCIツール。
lighthouseの結果を記録して、項目ごとにAssertionsを設定でき、コミットごとにそのパフォーマンスのリグレッションが発生してないかを継続的にチェックできるツール。
