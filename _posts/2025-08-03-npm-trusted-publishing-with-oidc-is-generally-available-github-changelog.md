---
title: npm trusted publishing with OIDC is generally available - GitHub Changelog
author: azu
layout: post
itemUrl: >-
  https://github.blog/changelog/2025-07-31-npm-trusted-publishing-with-oidc-is-generally-available/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2025/08/index.json'
date: '2025-08-03T15:16:11Z'
tags:
  - npm
  - security
  - article
---
GitHub ActionsやGitLab CI/CDからOIDCでnpm publishができるように。
CIにsecretsとしてnpm registryのtokenを入れなくても、npm側のTrusted Publisherの設定によりCIからpublishができるようになっている。
npm 11.5.1以降が必要
