---
title: Introducing Deno Sandbox | Deno
author: azu
layout: post
itemUrl: 'https://deno.com/blog/introducing-deno-sandbox'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2026/02/index.json'
date: '2026-02-06T07:42:29Z'
tags:
  - deno
  - security
  - API
  - VM
  - server
relatedLinks:
  - title: Deno Sandbox
    url: 'https://deno.com/deploy/sandbox'
---
信頼できないコード（LLM生成コードなど）を安全に実行するためのプラットフォームとSDKであるDeno Sandboxについて。
Deno Deployのクラウド上でLinux microVMを使用し、隔離された実行環境を提供する。
APIキーなどのシークレットはプレースホルダーとして渡され、許可されたホストへのリクエスト時のみ使用される仕組み。
