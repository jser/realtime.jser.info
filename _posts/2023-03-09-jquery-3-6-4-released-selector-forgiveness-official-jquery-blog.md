---
title: 'jQuery 3.6.4 Released: Selector Forgiveness | Official jQuery Blog'
author: azu
layout: post
itemUrl: 'https://blog.jquery.com/2023/03/08/jquery-3-6-4-released-selector-forgiveness/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2023/03/index.json'
date: '2023-03-09T14:07:47Z'
tags:
  - jQuery
  - ReleaseNote
relatedLinks:
  - title: >-
      [selectors] May new pseudos using forgiving parsing be introduced in the
      future? · Issue #8378 · w3c/csswg-drafts
    url: 'https://github.com/w3c/csswg-drafts/issues/8378'
---
jQuery 3.6.4リリース。
jQuery 3.6.3で入れた`CSS.supports`を使ってSelectorがネイティブなものかを判定する処理を元に戻している。
`CSS.supports`と`querySelector`はセレクタの扱いに関して異なる部分があるため、元のtry-catchを使う実装に戻した。
