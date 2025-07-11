---
title: >-
  typescript-eslint/tsgolint: :sparkles: Experimental proof-of-concept
  typescript-go powered JS/TS linter written in Go
author: azu
layout: post
itemUrl: 'https://github.com/typescript-eslint/tsgolint'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2025/07/index.json'
date: '2025-07-11T01:07:25Z'
tags:
  - TypeScript
  - ESLint
  - library
---
TSLintの ルールをtsgoで動くようにしてどれぐらい早くなるかの試験的な実装。
ESLintのASTへの変換をせずにTS ASTをそのまま扱うようにする変更も行なっていて、20-40倍程度早くチェックできている
