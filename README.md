sorriso [![][mit-badge]][mit] [![][travis-badge]][travis]
==========
get niconico video informations.

Installation
----------
```
npm install sorriso
```

Usage
----------

#### Node.js
```js
const sorriso = require('sorriso').default;
const result = await sorriso('sm9');
console.dir(result);

/* 
{ category: null,
  comment: 4474349,
  deleted: false,
  description: 'レッツゴー!陰陽師(フルコーラスバージョン)',
  image: 'http://tn-skr2.smilevideo.jp/smile?i=9',
  mylist: 167570,
  reported: false,
  time: { string: '5:19', hours: 0, minutes: 5, seconds: 19 },
  title: '新・豪血寺一族 -煩悩解放 - レッツゴー！陰陽師',
  updated: '2017-02-27T15:13:04+09:00',
  uploaded: '2007-03-06T00:33:00+09:00',
  user: 
   { nickname: '運営長の中の人',
     id: 4,
     image: 'http://dcdn.cdn.nimg.jp/nicoaccount/usericon/0/4.jpg?1271141672',
     secret: false },
  view: 16289263 }
*/
```

#### TypeScript
```ts
import sorriso from 'sorisso';
const result = await sorriso('sm9');
console.dir(result);

/* 
{ category: null,
  comment: 4474349,
  deleted: false,
  description: 'レッツゴー!陰陽師(フルコーラスバージョン)',
  image: 'http://tn-skr2.smilevideo.jp/smile?i=9',
  mylist: 167570,
  reported: false,
  time: { string: '5:19', hours: 0, minutes: 5, seconds: 19 },
  title: '新・豪血寺一族 -煩悩解放 - レッツゴー！陰陽師',
  updated: '2017-02-27T15:13:04+09:00',
  uploaded: '2007-03-06T00:33:00+09:00',
  user: 
   { nickname: '運営長の中の人',
     id: 4,
     image: 'http://dcdn.cdn.nimg.jp/nicoaccount/usericon/0/4.jpg?1271141672',
     secret: false },
  view: 16289263 }
*/
```

License
----------
The MIT License. See [LICENSE](LICENSE).

[mit]: http://opensource.org/licenses/MIT
[mit-badge]:https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[travis]: https://travis-ci.org/prezzemolo/sorriso
[travis-badge]: https://img.shields.io/travis/prezzemolo/sorriso/master.svg?style=flat-square
