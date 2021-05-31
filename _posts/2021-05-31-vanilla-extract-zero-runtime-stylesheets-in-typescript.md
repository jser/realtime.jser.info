---
title: vanilla-extract — Zero-runtime Stylesheets-in-TypeScript.
author: azu
layout: post
itemUrl: 'https://vanilla-extract.style/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/05/index.json'
date: '2021-05-31T14:25:42Z'
tags:
  - CSS
  - JavaScript
  - TypeScript
  - Tools
relatedLinks:
  - title: >-
      :ice_cream: Mark Dalgleish on Twitter: &amp;quot;:tada: Announcing
      vanilla-extract v1.0! :muscle: Locally scoped, type-safe styles, variables
      + themes.  Minimal abstraction over CSS.  Framework agnostic, w/
      integrations for webpack, esbuild, Vite + Snowpack. :white_check_mark: Now
      stable + production ready. :bow:‍♂️ Enjoy!
      https://t.co/Ejaf4anfbj&amp;quot; / Twitter
    url: 'https://twitter.com/markdalgleish/status/1398158090294292482'
---
vanilla-extract v1.0リリース。
TypeScriptでスタイルをJSとして`.css.ts`に書いて`class`属性に指定したものをコンパイルすると、CSSファイルを生成するフレームワークに依存しないツールキット。
ビルド時に静的に展開されるAPIと実行時に動作するDynamic API、webpackやViteなどの各種ツールに対応したプラグインが用意されている。
