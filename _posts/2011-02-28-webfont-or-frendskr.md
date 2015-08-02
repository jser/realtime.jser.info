---
title: 'Webfont 사용하기 | FRENDS.KR'
author: azu
layout: post
itemUrl: 'http://frends.kr/topics/webfont-%ec%82%ac%ec%9a%a9%ed%95%98%ea%b8%b0/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2011/02/index.json'
date: '2011-02-28T15:00:00+00:00'
---
@font-faceでのWebフォントについて。

それぞれのブラウザごとのFont Type対応表

Daum_Regular.ttfの場合のフォントサイズ比較

レンダリングの違いではWindowsの場合ブラウザによってまちまちな描画になっている。

→結論としてWiindowsできれいなフォント表示するには画像かフラッシュを使う

web fontsの比較(ライブラリやPHPやFlashを使ったもの)

-<a href="http://socialcompare.com/en/comparison/comparison-of-web-fonts-solutions-7d0b3w9" title="Comparison of web fonts solutions | SocialCompare - Comparisons community">Comparison of web fonts solutions | SocialCompare - Comparisons community</a>

で、この中で一番よかったのは<a href="https://github.com/sorccu/cufon/wiki/about" title="Cuf&#xF3;n">Cufón</a>というJavaScriptライブラリ。(フォントサイズは大きくなるのが欠点)

サイズは大きくなるけど、フォントサブセット(使うものだけ埋め込む)gzip圧縮する(mod_gzip使用)と、220kbぐらいになりブラウザ間の際はほとんどなくなった。

結論

1.WindowsではCufónを使い、Mac / Linuxでは@font-faceを使う

2.プラットフォームで分けるのが面倒なら<a href="https://github.com/sorccu/cufon/wiki/about" title="Cuf&#xF3;n">Cufón</a>を使う

3. 1,2がいやならFlashを使う

@font-faceの利用にする場合に読んでおくべきURL

# http://paulirish.com/2009/fighting-the-font-face-fout/

# http://paulirish.com/2009/bulletproof-font-face-implementation-syntax/ http://paulirish.com/2009/bulletproof-font-face-implementation-syntax/

# http://paulirish.com/2010/font-face-gotchas/ http://paulirish.com/2010/font-face-gotchas/ 
