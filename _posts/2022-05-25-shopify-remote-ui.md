---
title: Shopify/remote-ui
author: azu
layout: post
itemUrl: 'https://github.com/Shopify/remote-ui'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/05/index.json'
date: '2022-05-25T03:12:44Z'
tags:
  - JavaScript
  - React
  - Vue
  - webworker
  - security
  - library
relatedLinks:
  - title: 'Remote Rendering: Shopify’s Take on Extensible UI — Development (2022)'
    url: 'https://shopify.engineering/remote-rendering-ui-extensibility'
---
UIの定義をWeb WorkerなどのUIスレッド以外で行い、メッセージパッシングして受け取ったオブジェクトからレンダリングすることでSandboxに利用できるツールキット。
DOMライクなAPIやReact/Vue向けのAPIが用意されていて、ユーザーにUIツリーの定義を書いてもらい、それをレンダリングするホスト環境を別途実装できる。
ShopifyやStripe Appsで利用されている。
