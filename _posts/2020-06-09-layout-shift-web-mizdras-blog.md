---
title: '画像による Layout Shift が無くなる Web がやって来る - mizdra&#039;s blog'
author: azu
layout: post
itemUrl: 'https://www.mizdra.net/entry/2020/05/31/192613'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/06/index.json'
date: '2020-06-09T02:45:48Z'
tags:
  - browser
  - article
---
ブラウザのデフォルトスタイルシートに`aspect-ratio`の指定が入ることで、widthとheight属性に値を入れることでLayout Shiftが抑えられることについて

```
img {
  aspect-ratio: attr(width) / attr(height);
}
```
