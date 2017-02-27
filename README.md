sorriso [![][mit-badge]][mit] [![][travis-badge]][travis]
==========
getter of niconico video informations.

Installation
----------
```
npm install sorriso
```

Usage
----------

#### on commonJS
```js
const sorriso = require('sorriso').default;
const result = await sorriso('sm9');
console.dir(result);

/* 
{ deleted: false,
  category: null,
  comment: 4474349,
  description: 'レッツゴー!陰陽師(フルコーラスバージョン)',
  image: 'http://tn-skr2.smilevideo.jp/smile?i=9',
  time: '5:19',
  time_hours: 0,
  time_minutes: 5,
  time_seconds: 19,
  title: '新・豪血寺一族 -煩悩解放 - レッツゴー！陰陽師',
  my_list: 167570,
  reported: false,
  updated_at: '2017-02-27T15:13:04+09:00',
  uploaded_at: '2007-03-06T00:33:00+09:00',
  user_nickname: '運営長の中の人',
  user_id: 4,
  user_image: 'http://dcdn.cdn.nimg.jp/nicoaccount/usericon/0/4.jpg?1271141672',
  user_secret: false,
  view: 16289263 }
*/
```

#### on TypeScript
```ts
import sorriso from 'sorisso';
const result = await sorriso('sm9');
console.dir(result);

/* 
{ deleted: false,
  category: null,
  comment: 4474349,
  description: 'レッツゴー!陰陽師(フルコーラスバージョン)',
  image: 'http://tn-skr2.smilevideo.jp/smile?i=9',
  time: '5:19',
  time_hours: 0,
  time_minutes: 5,
  time_seconds: 19,
  title: '新・豪血寺一族 -煩悩解放 - レッツゴー！陰陽師',
  my_list: 167570,
  reported: false,
  updated_at: '2017-02-27T15:13:04+09:00',
  uploaded_at: '2007-03-06T00:33:00+09:00',
  user_nickname: '運営長の中の人',
  user_id: 4,
  user_image: 'http://dcdn.cdn.nimg.jp/nicoaccount/usericon/0/4.jpg?1271141672',
  user_secret: false,
  view: 16289263 }
*/
```


License
----------
The MIT License. See [LICENSE](LICENSE).

[mit]: http://opensource.org/licenses/MIT
[mit-badge]:https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[travis]: https://travis-ci.org/prezzemolo/sorriso
[travis-badge]: https://travis-ci.org/prezzemolo/sorriso.svg?branch=master