---
title: Digging for SSRF in NextJS apps
author: azu
layout: post
itemUrl: 'https://www.assetnote.io/resources/research/digging-for-ssrf-in-nextjs-apps'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/05/index.json'
date: '2024-05-18T14:32:36Z'
tags:
  - Next.js
  - security
  - article
relatedLinks:
  - title: >-
      Next.js Server-Side Request Forgery in Server Actions · CVE-2024-34351 ·
      GitHub Advisory Database
    url: 'https://github.com/advisories/GHSA-fr5h-rqp8-mj6g'
---
Next.js 14.1.1で修正されたSSRFの脆弱性について。
Server Actionsで`redirect()`を使ったパスのリダレクとをしてるAPIがある場合に、Next.jsから任意のURLに対してGETリクエストした内容を取得できるSSRF脆弱性について
