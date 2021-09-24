---
title: es-module-shims/CHANGELOG.md at 1.0.0 · guybedford/es-module-shims
author: azu
layout: post
itemUrl: 'https://github.com/guybedford/es-module-shims/blob/1.0.0/CHANGELOG.md'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2021/09/index.json'
date: '2021-09-24T12:28:12Z'
tags:
  - ECMAScript
  - module
  - polyfill
  - ReleaseNote
relatedLinks:
  - title: >-
      feat: make the CSP asm.js build the main entry by guybedford · Pull
      Request #193 · guybedford/es-module-shims
    url: 'https://github.com/guybedford/es-module-shims/pull/193'
  - title: >-
      feat: asm.js build by guybedford · Pull Request #86 ·
      guybedford/es-module-lexer
    url: 'https://github.com/guybedford/es-module-lexer/pull/86'
  - title: >-
      content-security-policy/CSP.md at master ·
      WebAssembly/content-security-policy
    url: >-
      https://github.com/WebAssembly/content-security-policy/blob/master/proposals/CSP.md
---
ES Module Shims 1.0.0リリース。
lexerがWasmを利用していたため`unsafe-eval`のCSP設定が必要となっていたが、asm.jsビルドを使いデフォルトでCSPに対応した。
また、パフォーマンスについてはほぼ同等で、Safariに関してはasm.js版の方が早くなっている。
