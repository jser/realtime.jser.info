---
title: Release pnpm 10 · pnpm/pnpm
author: azu
layout: post
itemUrl: 'https://github.com/pnpm/pnpm/releases/tag/v10.0.0'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2025/01/index.json'
date: '2025-01-08T01:10:45Z'
tags:
  - pnpm
  - ReleaseNote
---
pnpm v10.0.0リリース。
インストールするパッケージのlifecycle scriptをデフォルトで実行しないように変更。
 `pnpm link`の挙動の変更、`packageManager`を参照してpnpmのバージョンを確認するように、ハッシュアルゴリズムをSHA256に変更、storeバージョンの更新。
pnpmに関する設定を共有できる`configDependencies`を追加。 `verifyDepsBeforeRun`オプションが追加され、lockと`node_modules/`の状態を比較して自動インストールなどの挙動を選択できるようになるなど。
