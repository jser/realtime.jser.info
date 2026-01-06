---
title: Introducing Flint | Flint
author: azu
layout: post
itemUrl: 'https://www.flint.fyi/blog/introducing-flint/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/01/index.json'
date: '2026-01-06T13:06:02Z'
tags:
  - ESLint
  - Tools
  - article
relatedLinks:
  - title: What Flint Does Differently | Flint
    url: 'https://www.flint.fyi/blog/what-flint-does-differently/'
---
TypeScript-ESLintのメンテナー中心で書かれた実験的なハイブリッドリンター。
TypeScriptで書かれたコアとnative speed(Go/Rust)のパーサーを組み合わせることで、パフォーマンスと開発者の親しみやすさの両立を目指している。
アーキテクチャ面では、ハイブリッドコア/TypeScriptの型情報を常に利用/クロスファイルキャッシュ/JSON/Markdown/YAMLの組み込みサポート/Prettierとの統合などを採用。
Lintはエラーのみとし、インタラクティブなCLI、オプション名の標準化、プラグインレジストリなどを用意する予定
