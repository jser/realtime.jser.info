---
title: 画像による Layout Shift が無くなる Web がやって来る - mizdra's blog
author: azu
layout: post
itemUrl: 'https://www.mizdra.net/entry/2020/05/31/192613'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2020/06/index.json'
date: '2020-06-04T12:51:42Z'
tags:
  - browser
  - article
---
ブラウザのデフォルトスタイルシートに`aspect-ratio`の指定が入ったことで、widthとheight属性に値を入れることでLayout Shiftが抑えられることについて

```
img {
  aspect-ratio: attr(width) / attr(height);
}
```
