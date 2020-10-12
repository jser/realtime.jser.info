---
title: Gaining security and privacy by partitioning the cache  |  Web
author: azu
layout: post
itemUrl: 'https://developers.google.com/web/updates/2020/10/http-cache-partitioning'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/10/index.json'
date: '2020-10-12T13:34:32Z'
tags:
  - Chrome
  - HTTP
  - article
relatedLinks:
  - title: shivanigithub/http-cache-partitioning
    url: 'https://github.com/shivanigithub/http-cache-partitioning/'
---
Chrome 86でのCache partitioningについて。
今まではアクセスするリソースのURLのみでCache Keyを構成していたが、今後はアクセス元のサイトなどもCache Keyに利用されるという話。
アクセス元のサイトとアクセスするリソースのURLのDouble-keying、アクセス元のサイトとiframeのサイトとアクセスするリソースのURLのTriple-keyingのキャッシュについて
