---
title: 'Improving Core Web Vitals, A Smashing Magazine Case Study'
author: azu
layout: post
itemUrl: >-
  https://www.smashingmagazine.com/2021/12/core-web-vitals-case-study-smashing-magazine/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/01/index.json'
date: '2022-01-07T15:43:20Z'
tags:
  - performance
  - article
---
Core Web Vitalsの改善とCrUXのメトリクスを掘り下げた記事。
LCPなどを改善したが、CrUXのデータが改善されなかった点を掘り下げていき、特定地域のデータによって統計データが歪んでいたことを特定した方法について。
CDNがカバーしきれてない地域などが問題となっていたため、`SaveData`ヘッダと`prefers-reduced-data`を元にWeb Fontのロードを減らした話。
