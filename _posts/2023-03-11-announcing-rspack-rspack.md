---
title: Announcing Rspack - Rspack
author: azu
layout: post
itemUrl: 'https://www.rspack.dev/blog/announcement.html'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/03/index.json'
date: '2023-03-11T01:20:52Z'
tags:
  - webpack
  - bundler
  - ReleaseNote
relatedLinks:
  - title: Migration from webpack - Rspack
    url: 'https://www.rspack.dev/guide/migrate-from-webpack.html'
  - title: Loader compat - Rspack
    url: 'https://www.rspack.dev/guide/loader-compat.html'
  - title: Plugin compat - Rspack
    url: 'https://www.rspack.dev/guide/plugin-compat.html'
---
Rustで書かれたwebpack互換のbundler。
webpackを使うプロジェクトとの互換性や移行性を考慮していて、オプションやloaderも互換性ある形で実装している。
出力するランタイムコードもwebpackの出力との互換性を考慮していて、プラグインもJSで書けるようになっている。
また、webpackチームとも連携していて、webpackとの統合も計画している。
