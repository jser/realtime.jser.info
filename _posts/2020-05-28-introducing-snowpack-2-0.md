---
title: Introducing Snowpack 2.0
author: azu
layout: post
itemUrl: 'https://www.snowpack.dev/posts/2020-05-26-snowpack-2-0-release/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/05/index.json'
date: '2020-05-28T14:26:43Z'
tags:
  - bundler
  - Tools
  - JavaScript
  - ReleaseNote
---
Snowpack 2.0リリース。
ES Modulesをネイティブに使った開発を行うためのビルドシステム。
開発時はファイルごとにビルドを行い、production buildではwebpackやparcelを使ってbundleしたビルドを行う。
Build ScriptsやPluginでのカスタマイズを行えるようになっている。
デフォルトではesbuildを使ってjs,jsx,ts,tsxのビルドを行う
