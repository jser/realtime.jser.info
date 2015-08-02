---
title: 打造最出色的模块加载框架：SeaJS Module Loader v0.3.0 预览版 - 岁月如歌
author: azu
layout: post
itemUrl: 'http://lifesinger.org/blog/2011/01/seajs-v0-3-0pre/'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2011/01/index.json'
date: '2011-01-31T15:00:00.000Z'
---
モジュールのロードに最適なフレームワークを作成するためには、SeaJS Module Loader v0.3.0 プレビュー版 というタイトルでJavaScriptでのモジュール化について書かれています。

scriptタグでjsファイルを複数ロードする場合は4つの問題があります。

-ブロッキング

-名前空間の汚染の可能性

-依存関係を書く人が知っておく必要性

-HTTPリンクが多すぎる

それぞれを解決する典型的な方法もそれぞれ4つ上げられていています。

-LabJS, HeadJS, ControlJSなどの非同期スクリプトローダーの利用

-Xといった一つのグローバルを用意してその下にX.bizなどと拡張する

-フレームワークに用意されているモジュール機構を利用する。(YUI3ならYUI.add,YUI.use)

-一つのファイルとしてマージする

YUI3における解決方法が紹介されてるが、YUI3にはまだ改善点があると述べています。

-モジュール管理機構が冗長過ぎる

-YUIのファイルサイズ自体が大きすぎる

-YUI.useでの直感的でない書き方

-YUI3のモジュールはYUI3でしか使えない

CommonJS自体にはSeaJSの方が適しています。

SeaJS はCommonJSに影響を受けて作成されていて以下のコアコンセプトがあります。

-機能を単一なものとして分離

-モジュールのパスとファイル名で識別(別途指定しなくてもいい)

-必要となるまでは実行しない

SeaJS Module Loaderには次のAPIがあります。

   1. モジュール宣言:module.declare(id?, deps, factory)

   2. モジュールの提供:module.provide(ids, callback)

   3. require(id)

YUIとSeaJSを比べて、SeaJS には次の利点があります。

-圧縮する前で3.3k,圧縮して1.7kと小さい

-非依存モジュールは並列ダウンロード

-全体のCPU消費や必要となるまで実行しないためCPUに優しい

-設定ファイルではなくデータの構成に基づいている

-相対パスのサポートなどCommonJSに基づいている

コードは<a href="https://github.com/seajs/seajs" title="seajs/seajs - GitHub">seajs/seajs - GitHub</a>で公開されています。(フォーク歓迎)



という感じで適当に内容を書き出してみました。(機械翻訳便りなので内容は期待しないで)

中国では<a href="https://github.com/dexteryy/OzJS" title="dexteryy/OzJS - GitHub">dexteryy/OzJS - GitHub</a>といい、モジュール管理に注目してる人たちがいるみたいです。
