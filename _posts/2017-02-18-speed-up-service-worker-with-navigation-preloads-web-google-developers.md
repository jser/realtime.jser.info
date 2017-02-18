---
title: Speed up Service Worker with Navigation Preloads  |  Web  |  Google Developers
author: azu
layout: post
itemUrl: 'https://developers.google.com/web/updates/2017/02/navigation-preload'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2017/02/index.json'
date: '2017-02-18T04:12:08Z'
tags:
  - ServiceWorker
  - Chrome
relatedLinks:
  - title: OriginTrials/developer-guide.md at gh-pages · jpchase/OriginTrials
    url: 'https://github.com/jpchase/OriginTrials/blob/gh-pages/developer-guide.md'
---
Chrome 57からOrigin-Trialで試験的に使える ServiceWorkerのnavigation preloadについて。
今まではServiceWorkerが起動してからリクエストが開始されていたため、起動時間がボトルネックとなるケースがあった。
ServiceWorkerをパラレルに扱うことができ、preloadされているリクエストを取得できるAPIについて

