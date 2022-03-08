---
title: How to Upgrade to the React 18 Release Candidate – React Blog
author: azu
layout: post
itemUrl: 'https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html'
editJSONPath: 'https://github.com/jser/jser.info/edit/gh-pages/data/2022/03/index.json'
date: '2022-03-08T23:55:26Z'
tags:
  - React
  - ReleaseNote
---
React 18 RCリリース。
IEのサポートを終了。
ReactDOMの`render` APIをDeprecatedとし、`createRoot` APIの利用を推奨するように。
SSR APIの`renderToNodeStream`を非推奨化し、Suspenseをサポートした`renderToPipeableStream`と`renderToReadableStream`を追加。
`setState`のステート更新を自動的にバッジ処理するようにし、オプトアウト用の`flushSync`APIを追加。
また、ReduxなどのReact外でステート管理するライブラリ向けに`userId`/`useSyncExternalStore`/`useInsertionEffect` APIを追加。
開発時は`&lt;StrictMode&gt;`でunmountとmountでの再マウントをテストするように挙動を変更。
`global.IS_REACT_ACT_ENVIRONMENT`でテスト環境かどうかを設定できるように。
