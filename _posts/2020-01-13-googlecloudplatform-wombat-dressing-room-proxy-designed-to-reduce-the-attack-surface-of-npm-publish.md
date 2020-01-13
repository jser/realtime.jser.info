---
title: >-
  GoogleCloudPlatform/wombat-dressing-room: proxy designed to reduce the attack
  surface of npm publish
author: azu
layout: post
itemUrl: 'https://github.com/GoogleCloudPlatform/wombat-dressing-room'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/01/index.json'
date: '2020-01-13T10:55:27Z'
tags:
  - npm
  - Github
  - security
relatedLinks:
  - title: >-
      Wombat Dressing Room, an npm publication proxy on GCP | Google Open Source
      Blog
    url: >-
      https://opensource.googleblog.com/2020/01/wombat-dressing-room-npm-publication_10.html
---
GitHubリポジトリに紐付いたnpm publishをするための認証トークンを発行するシステム。npm registryに対する2FA Proxy。
トークンと該当するGitHubのタグがある場合にのみpublishでき、トークンはパッケージごとに異なるため流出しても特定のパッケージのみに影響を抑える目的。
