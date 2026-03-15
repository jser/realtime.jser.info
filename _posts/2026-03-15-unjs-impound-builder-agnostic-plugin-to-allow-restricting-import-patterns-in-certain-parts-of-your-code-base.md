---
title: >-
  unjs/impound: Builder-agnostic plugin to allow restricting import patterns in
  certain parts of your code-base.
author: azu
layout: post
itemUrl: 'https://github.com/unjs/impound?tab=readme-ov-file'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/03/index.json'
date: '2026-03-15T02:22:02Z'
tags:
  - JavaScript
  - TypeScript
  - Tools
  - module
  - bundler
  - plugin
---
特定のディレクトリからのimportを禁止するなどのパターンを定義できるunpluginプラグイン。
正規表現、文字列、関数によるパターンマッチでimportの制限ルールを定義できる。
`trace`オプションを有効にすると、ルールで禁止された結果をわかりやすく表示できる
