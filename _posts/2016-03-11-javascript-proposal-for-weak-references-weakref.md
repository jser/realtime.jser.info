---
title: 'JavaScript Proposal for weak references: WeakRef'
author: azu
layout: post
itemUrl: 'https://ponyfoo.com/articles/weakref'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2016/03/index.json'
date: '2016-03-11T03:18:35+00:00'
tags:
  - ECMAScript
  - JavaScript
  - proposal
relatedLinks:
  - title: proposal-weakrefs/weakrefs.md at master · tc39/proposal-weakrefs
    url: 'https://github.com/tc39/proposal-weakrefs/blob/master/specs/weakrefs.md'
---
`WeakRef` Proposalについての解説。
WeakMapと同じようにWeakな扱いだが、WeakMapと違いGCで回収された時に呼ばれる`executor`を指定できる。(WeakMap/Setは回収されたタイミングを知ることができない)
