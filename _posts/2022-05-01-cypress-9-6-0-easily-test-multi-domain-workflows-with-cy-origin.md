---
title: 'Cypress 9.6.0: Easily test multi-domain workflows with cy.origin'
author: azu
layout: post
itemUrl: >-
  https://cypress.io/blog/2022/04/25/cypress-9-6-0-easily-test-multi-domain-workflows-with-cy-origin/
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/05/index.json'
date: '2022-05-01T05:31:33Z'
tags:
  - browser
  - testing
  - library
  - ReleaseNote
relatedLinks:
  - title: Release 9.6.0 · cypress-io/cypress
    url: 'https://github.com/cypress-io/cypress/releases/tag/v9.6.0'
---
Cypress 9.6.0リリース。
Cypressはブラウザ内でテストを実行するためマルチドメインに関わるテストはSame Origin Policyで上手く行かないケースがあった。
これを解決するために`cy.origin` APIがフラグ付きで実装された。
