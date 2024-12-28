---
title: Release pnpm 10.0 RC 1 · pnpm/pnpm
author: azu
layout: post
itemUrl: 'https://github.com/pnpm/pnpm/releases/tag/v10.0.0-rc.1'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2024/12/index.json'
date: '2024-12-28T06:48:09Z'
tags:
  - pnpm
  - ReleaseNote
---
pnpm v10.0.0-rc.1リリース。
インストールするパッケージのlifecycle scriptをデフォルトで実行しないように変更。
 `pnpm link`の挙動の変更、`packageManager`を参照してpnpmのバージョンを確認するように、ハッシュアルゴリズムをSHA256に変更、storeバージョンの更新。
 `verifyDepsBeforeRun`オプションが追加され、lockと`node_modules/`の状態を比較して自動インストールなどの挙動を選択できるようになるなど。
