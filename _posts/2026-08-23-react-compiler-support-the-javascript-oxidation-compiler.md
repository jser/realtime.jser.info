---
title: React Compiler Support | The JavaScript Oxidation Compiler
author: azu
layout: post
itemUrl: 'https://oxc.rs/blog/2026-08-18-react-compiler-support'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/08/index.json'
date: '2026-08-23T05:07:16Z'
tags:
  - JavaScript
  - React
  - article
  - Rust
---
OxcのReact Compilerサポートについての記事。
React公式のRustポートはASTの形式が異なるため、OxC独自のRustポートを作成している。
OxlintにReact Compilerベースの22個のルールを追加、`oxc-transform-react`でReact Compilerによる自動メモ化を扱える。
