---
title: Monitor your web application with the Reporting API
author: azu
layout: post
itemUrl: 'https://web.dev/reporting-api/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/10/index.json'
date: '2021-10-25T13:22:39Z'
tags:
  - Chrome
  - browser
  - article
relatedLinks:
  - title: >-
      Reporting API: Isolate reports per-document and support the
      Reporting-Endpoints header - Chrome Platform Status
    url: 'https://www.chromestatus.com/feature/5712172409683968'
  - title: Migrate to Reporting API v1
    url: 'https://web.dev/reporting-api-migration/#migration-steps'
---
Chrome 96から利用できる`Reporting-Endpoints`について。
`Report-To`はDeprecatedとなり`Reporting-Endpoints`を使うようになる。
CSPエラー、ネットワークエラー、ポリシーエラーのレポート先を指定できる
