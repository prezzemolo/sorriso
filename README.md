sorriso
==========
[![][mit-badge]][mit] [![][travis-badge]][travis] [![][greenkeeper-badge]][greenkeeper] [![][npm-badge]][npm]  
get niconico video informations.

Installation
----------
```
npm install sorriso
```

Example
----------
### Node.js
```js
const sorriso = require('sorriso').default;
const result = await sorriso('sm9');
console.dir(result);

/*
{ comment: 213,
  description: '初下山ですガバというか地力不足ですがごりらの皆さん許して次：sm30123105https://twitter.com/kuro1234502IIDX ID:0324-3161【追記】リオール兄貴、ぽく兄貴、からすまる兄貴、広告ありがとうございます！',
  image: 'http://tn-skr2.smilevideo.jp/smile?i=30079993.L',
  mylist: 20,
  title: '凡人が六段を目指す',
  uploaded: '2016-11-20T13:29:13+09:00',
  user: 
   { nickname: 'くろ',
     id: 13889910,
     icon: 'https://secure-dcdn.cdn.nimg.jp/nicoaccount/usericon/s/1388/13889910.jpg?1475317221' },
  view: 3686,
  category: 'ゲーム',
  time: { string: '12:41', hours: 0, minutes: 12, seconds: 41 } }
*/
```

### TypeScript
```ts
import sorriso from 'sorisso';
const result = await sorriso('sm9');
console.dir(result);

/* 
{ comment: 213,
  description: '初下山ですガバというか地力不足ですがごりらの皆さん許して次：sm30123105https://twitter.com/kuro1234502IIDX ID:0324-3161【追記】リオール兄貴、ぽく兄貴、からすまる兄貴、広告ありがとうございます！',
  image: 'http://tn-skr2.smilevideo.jp/smile?i=30079993.L',
  mylist: 20,
  title: '凡人が六段を目指す',
  uploaded: '2016-11-20T13:29:13+09:00',
  user: 
   { nickname: 'くろ',
     id: 13889910,
     icon: 'https://secure-dcdn.cdn.nimg.jp/nicoaccount/usericon/s/1388/13889910.jpg?1475317221' },
  view: 3686,
  category: 'ゲーム',
  time: { string: '12:41', hours: 0, minutes: 12, seconds: 41 } }
*/
```

License
----------
The MIT License. See [LICENSE](LICENSE).

[mit]: http://opensource.org/licenses/MIT
[mit-badge]:https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[travis]: https://travis-ci.org/prezzemolo/sorriso
[travis-badge]: https://img.shields.io/travis/prezzemolo/sorriso/master.svg?style=flat-square
[greenkeeper]: https://greenkeeper.io/
[greenkeeper-badge]: https://badges.greenkeeper.io/prezzemolo/sorriso.svg
[npm]: https://www.npmjs.com/package/sorriso
[npm-badge]: https://badge.fury.io/js/sorriso.svg
