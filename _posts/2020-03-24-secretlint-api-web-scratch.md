---
title: SecretlintでAPIトークンや秘密鍵などのコミットを防止する | Web Scratch
author: azu
layout: post
itemUrl: 'https://efcl.info/2020/03/24/secretlint/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/03/index.json'
date: '2020-03-24T07:40:09Z'
tags:
  - security
  - node.js
  - Tools
  - Docker
  - article
relatedLinks:
  - title: >-
      secretlint/secretlint: Pluggable linting tool to prevent committing
      credential.
    url: 'https://github.com/secretlint/secretlint'
---
ファイル内にAWSやGCPなどのCredentialsを含んでいないかチェックできるLintツール。
DockerやNode.jsから利用できる。プロジェクトや個人環境にpre-commit hookで組み込んだり、CIでうっかり秘匿情報が入ってないかをチェックできる。
ルールはNode.jsで自作して追加できる。
