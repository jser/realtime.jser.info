---
title: >-
  Design Trade-offs in Bundler: The Rationale Behind Creating Rspack ·
  web-infra-dev/wg · Discussion #1
author: azu
layout: post
itemUrl: 'https://github.com/web-infra-dev/wg/discussions/1'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/09/index.json'
date: '2023-09-02T06:31:58Z'
tags:
  - JavaScript
  - bundler
  - article
  - architecture
---
Rspackの開発の目的やwebpack/parcel/esbuild/rollupなどのbundlerのアーキテクチャについて。
webpackにはデバッグやパフォーマンスの問題があり、Vite/Rollupも大規模プロジェクトではパフォーマンスにビルド環境の差異の問題があり、esbuildはプラグインの柔軟性に問題がある。
RollupはESMのみが第一級市民であり、RspackはwebpackとParcelと同じく言語に依存しないことを目的にしている。
それぞれのbundlerのプラグインAPIの設計と複雑性、ASTの再利用とパフォーマンスの問題、Tree ShakingをASTベースで行った場合の課題について。
また、今後のRspackが目指す方向して簡単に使えるようにすること、デバッグをしやすくすること、最適化をwebpackと同等以上にすること、リモートキャッシュなどについて触れている。
