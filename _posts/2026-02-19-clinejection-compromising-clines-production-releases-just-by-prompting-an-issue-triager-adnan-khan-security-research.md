---
title: >-
  Clinejection — Compromising Cline&#039;s Production Releases just by Prompting
  an Issue Triager | Adnan Khan - Security Research
author: azu
layout: post
itemUrl: 'https://adnanthekhan.com/posts/clinejection/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/02/index.json'
date: '2026-02-19T23:23:12Z'
tags:
  - security
  - VSCode
  - AI
  - article
---
ClineのGitHub Actionsワークフローに対する攻撃手法についての記事。
AIを使ったIssueトリアージボットへのPrompt Injectionを起点に、GitHub Actionsのキャッシュポイズニングを組み合わせる攻撃手法について。
攻撃が成功した場合、VSCode Marketplace/OpenVSX/npmの公開用トークンを取れる問題があり、実際にCline CLIのnpmパッケージが侵害されていた。
