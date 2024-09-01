---
title: >-
  DOM Clobbering Gadget found in Webpack&#039;s AutoPublicPathRuntimeModule that
  leads to XSS · Advisory · webpack/webpack
author: azu
layout: post
itemUrl: 'https://github.com/webpack/webpack/security/advisories/GHSA-4vvj-4cpr-p986'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/09/index.json'
date: '2024-09-01T02:05:59Z'
tags:
  - webpack
  - ReleaseNote
  - security
relatedLinks:
  - title: Release v5.94.0 · webpack/webpack
    url: 'https://github.com/webpack/webpack/releases/tag/v5.94.0'
  - title: >-
      security: fix DOM clobbering in auto public path by alexander-akait · Pull
      Request #18700 · webpack/webpack
    url: 'https://github.com/webpack/webpack/pull/18700'
---
webpackのセキュリティリリース。
ユーザーが任意の属性を含む`&lt;img&gt;`タグをかける場合に、webpackの`publicPath: &#039;auto&#039;`が有効なbundleを読み込むとXSSが発生する問題。
webpack 5.94.0で修正された。
