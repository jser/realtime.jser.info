---
title: npm debug and chalk packages compromised
author: azu
layout: post
itemUrl: 'https://www.aikido.dev/blog/npm-debug-and-chalk-packages-compromised'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2025/09/index.json'
date: '2025-09-09T06:48:53Z'
tags:
  - npm
  - security
  - article
relatedLinks:
  - title: >-
      (RESOLVED) Version 4.4.2 published to npm is compromised · Issue #1005 ·
      debug-js/debug
    url: 'https://github.com/debug-js/debug/issues/1005#issuecomment-3266868187'
  - title: >-
      npm debug, color-convert, backslash, error-ex, simple-swizzle,
      is-arrayish, color-name, color-string have incorrect wildcard version in
      their malware advisory (2025-09-08) · Issue #6099 ·
      github/advisory-database
    url: 'https://github.com/github/advisory-database/issues/6099'
---
`debug`や`chalk`など著名なnpmパッケージにブラウザで動作するマルウェアを含むバージョンが公開された問題について。

現在はnpm registryから該当のバージョンは削除されている。
次のパッケージのバージョン影響を受けていた。

```
ansi-styles@6.2.2
debug@4.4.2
chalk@5.6.1
supports-color@10.2.1
strip-ansi@7.1.1
ansi-regex@6.2.1
wrap-ansi@9.0.1
color-convert@3.1.1
color-name@2.0.1
is-arrayish@0.3.3
slice-ansi@7.1.1
color@5.0.1
color-string@2.1.1
simple-swizzle@0.2.3
supports-hyperlinks@4.1.1
has-ansi@6.0.1
chalk-template@1.1.1
backslash@0.2.1
```
