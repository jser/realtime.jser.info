---
title: >-
  npm security update: Attack campaign using stolen OAuth tokens | The GitHub
  Blog
author: azu
layout: post
itemUrl: 'https://github.blog/2022-05-26-npm-security-update-oauth-tokens/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/06/index.json'
date: '2022-06-06T13:38:41Z'
tags:
  - npm
  - security
  - news
---
HerokuとTravis CIからGitHub OAuth Tokenの流出に関連して、npmが管理していたプライベートリポジトリからAWSへのアクセスキーが盗まれ、npmの一部情報が漏洩した。
2015年のユーザー情報(ユーザー名/メールアドレス/パスワードハッシュ)、2021年のプライベートnpmパッケージのメタデータ、2022年の全てのプライベートパッケージの名前とバージョンが漏洩した。
